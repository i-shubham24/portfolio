import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children, strength = 0.5 }) {
  const magneticRef = useRef(null);

  useEffect(() => {
    const el = magneticRef.current;
    
    // Create optimized GSAP quick-setters for butter-smooth performance
    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance and apply magnetic pull
      const distX = (clientX - centerX) * strength;
      const distY = (clientY - centerY) * strength;
      
      xTo(distX);
      yTo(distY);
    };

    const handleMouseLeave = () => {
      // Snap back to original position
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={magneticRef} className="inline-block relative z-10 cursor-pointer">
      {children}
    </div>
  );
}