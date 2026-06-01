import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee({ text, direction = -1 }) {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    let xPercent = 0;
    
    // Set initial direction based on scroll
    let scrollDirection = direction;
    
    ScrollTrigger.create({
      onUpdate: (self) => {
        // Change direction if scrolling up vs down
        scrollDirection = self.direction === 1 ? -1 : 1;
      }
    });

    gsap.ticker.add(() => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      
      gsap.set(textRef.current, { xPercent: xPercent });
      xPercent += 0.05 * scrollDirection; // Adjust speed here
    });
  }, { scope: marqueeRef });

  return (
    <div ref={marqueeRef} className="w-full overflow-hidden whitespace-nowrap py-12 flex items-center bg-violet-600/5 dark:bg-gray-900/30 border-y border-violet-100 dark:border-gray-800 my-20">
      <div ref={textRef} className="flex flex-nowrap gap-8 font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 dark:from-gray-800 dark:to-gray-700 opacity-50 uppercase tracking-tighter">
        {/* Repeat text multiple times to ensure it fills ultra-wide screens */}
        <span>{text}</span>
        <span>•</span>
        <span>{text}</span>
        <span>•</span>
        <span>{text}</span>
        <span>•</span>
        <span>{text}</span>
      </div>
    </div>
  );
}