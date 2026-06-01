import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRing() {
  const circleRef = useRef(null);

  useGSAP(() => {
    // Circle circumference logic
    const circumference = 2 * Math.PI * 24; // r=24
    
    gsap.set(circleRef.current, { 
      strokeDasharray: circumference, 
      strokeDashoffset: circumference 
    });

    gsap.to(circleRef.current, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });
  }, []);

  // Smooth scroll back to top when clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 cursor-pointer group hover:scale-110 transition-transform"
      title="Back to top"
    >
      <svg className="w-16 h-16 transform -rotate-90 drop-shadow-lg">
        {/* Background track */}
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" fill="none" className="text-violet-200 dark:text-gray-800" />
        {/* Scroll Progress line */}
        <circle 
          ref={circleRef} 
          cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none" 
          strokeLinecap="round"
          className="text-violet-600 dark:text-fuchsia-500 transition-colors" 
        />
      </svg>
      {/* Tiny up arrow inside */}
      <div className="absolute inset-0 flex items-center justify-center text-violet-600 dark:text-fuchsia-500 group-hover:-translate-y-1 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </div>
    </div>
  );
}