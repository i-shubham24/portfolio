import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AnimatedBackground() {
  const bgRef = useRef(null);

  useGSAP(() => {
    // Complex organic movement for the background blobs
    gsap.to('.blob-1', {
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      rotation: 'random(0, 360)',
      duration: 'random(10, 15)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.blob-2', {
      x: 'random(-150, 150)',
      y: 'random(-150, 150)',
      scale: 'random(0.8, 1.2)',
      duration: 'random(12, 18)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, { scope: bgRef });

  return (
    <div ref={bgRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="blob-1 absolute top-20 right-[10%] w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="blob-2 absolute bottom-20 left-[10%] w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
      <div className="blob-1 absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
    </div>
  );
}