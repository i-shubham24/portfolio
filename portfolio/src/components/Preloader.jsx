import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 1. The Counter Animation
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1; // Random jumps for realistic loading feel
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (counter >= 100) {
      // 2. The Exit Animation
      gsap.to(textRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power3.inOut'
      });

      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'expo.inOut',
        delay: 0.4,
        onComplete: onComplete // Tells the App we are done loading
      });
    }
  }, [counter, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 text-white"
    >
      <div ref={textRef} className="flex flex-col items-center">
        <span className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-4">Initializing AI Engine</span>
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
          {counter > 100 ? 100 : counter}%
        </h1>
      </div>
      {/* Progress Bar Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-100 ease-out" style={{ width: `${counter}%` }}></div>
    </div>
  );
}