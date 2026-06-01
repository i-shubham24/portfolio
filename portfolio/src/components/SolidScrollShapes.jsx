import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SolidScrollShapes() {
  const container = useRef(null);

  useGSAP(() => {
    // 1. The 3D Sphere (Expands and rotates across the screen on scroll)
    gsap.to('.shape-sphere', {
      y: '80vh',
      x: '10vw',
      scale: 1.8,
      rotation: 360,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // The '1.5' adds smooth momentum after you stop scrolling
      }
    });

    // 2. The 3D Pill (Squeezes and stretches vertically like jelly)
    gsap.to('.shape-pill', {
      y: '-80vh',
      scaleY: 1.8, // Stretches tall
      scaleX: 0.5, // Squeezes thin
      rotation: -45,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    // 3. The 3D Donut (Complex 3D tumbling rotation)
    gsap.to('.shape-donut', {
      y: '60vh',
      x: '-5vw',
      rotationX: 360, // Flips in 3D space
      rotationY: 180,
      scale: 0.8,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      }
    });

    // 4. The 3D Morphing Cube (Turns into a sphere as you scroll down)
    gsap.to('.shape-cube', {
      y: '-50vh',
      x: '-15vw',
      rotation: 180,
      scale: 1.2,
      borderRadius: '50%', // Morphs from a rounded cube to a perfect circle!
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 1. 3D Sphere */}
      <div className="shape-sphere absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-indigo-900 shadow-[inset_-15px_-15px_25px_rgba(0,0,0,0.4),0_15px_25px_rgba(0,0,0,0.2)] opacity-80 dark:opacity-60"></div>
      
      {/* 2. 3D Pill */}
      <div className="shape-pill absolute bottom-[15%] right-[8%] w-24 h-48 rounded-full bg-gradient-to-tr from-fuchsia-400 via-pink-500 to-rose-700 shadow-[inset_-15px_-15px_25px_rgba(0,0,0,0.3),0_20px_30px_rgba(0,0,0,0.2)] opacity-80 dark:opacity-60"></div>

      {/* 3. 3D Donut/Torus (Using borders for a ring effect) */}
      <div className="shape-donut absolute top-[45%] right-[10%] w-40 h-40 rounded-full border-[24px] border-sky-400 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.4),0_10px_20px_rgba(0,0,0,0.2)] opacity-80 dark:opacity-60"></div>

      {/* 4. 3D Morphing Cube */}
      <div className="shape-cube absolute bottom-[25%] left-[10%] w-28 h-28 rounded-3xl bg-gradient-to-tl from-emerald-400 to-teal-700 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.3),inset_-10px_-10px_20px_rgba(0,0,0,0.5),0_15px_25px_rgba(0,0,0,0.3)] opacity-80 dark:opacity-60"></div>
      
    </div>
  );
}