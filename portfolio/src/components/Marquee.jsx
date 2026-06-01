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
    
    let scrollDirection = direction;
    
    ScrollTrigger.create({
      onUpdate: (self) => {
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
      xPercent += 0.05 * scrollDirection; 
    });
  }, { scope: marqueeRef });

  return (
    // Removed all background colors and borders. Kept it purely transparent.
    <div ref={marqueeRef} className="w-full overflow-hidden whitespace-nowrap py-8 flex items-center my-12 pointer-events-none">
      
      {/* Downsized to 4xl/6xl and updated dark mode gradient to vibrant colors */}
      <div ref={textRef} className="flex flex-nowrap gap-8 font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 dark:from-violet-400 dark:to-fuchsia-500 opacity-60 dark:opacity-80 uppercase tracking-tighter">
        
        {/* Added extra spans since the text is smaller to ensure it fills ultra-wide screens */}
        <span>{text}</span>
        <span className="text-violet-400 dark:text-fuchsia-500 opacity-50">•</span>
        <span>{text}</span>
        <span className="text-violet-400 dark:text-fuchsia-500 opacity-50">•</span>
        <span>{text}</span>
        <span className="text-violet-400 dark:text-fuchsia-500 opacity-50">•</span>
        <span>{text}</span>
        <span className="text-violet-400 dark:text-fuchsia-500 opacity-50">•</span>
        <span>{text}</span>
        <span className="text-violet-400 dark:text-fuchsia-500 opacity-50">•</span>
        <span>{text}</span>
      </div>
    </div>
  );
}