// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const trailRefs = useRef([]);
//   const trailCount = 15; // Number of particles in the smoke trail

//   useEffect(() => {
//     // Hide default cursor on desktop
//     if (!window.matchMedia("(pointer: fine)").matches) return;
//     document.body.style.cursor = 'none';

//     const trailElements = trailRefs.current;
    
//     // Initial coordinates
//     let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
//     // Center all particles on load
//     gsap.set(cursorRef.current, { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });
//     gsap.set(trailElements, { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });

//     const onMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     window.addEventListener('mousemove', onMouseMove);

//     // GSAP Ticker for smooth physics-based trailing
//     const ticker = gsap.ticker.add(() => {
//       // 1. Move the main cursor head instantly
//       gsap.set(cursorRef.current, { x: mouse.x, y: mouse.y });

//       // 2. Calculate the fluid trail
//       let leadX = mouse.x;
//       let leadY = mouse.y;

//       trailElements.forEach((trail, index) => {
//         const currentX = gsap.getProperty(trail, "x");
//         const currentY = gsap.getProperty(trail, "y");

//         // The math that creates the fluid/smoke delay
//         const dx = leadX - currentX;
//         const dy = leadY - currentY;
        
//         // Lower number = longer, more fluid smoke tail
//         const speed = 0.35; 
        
//         const nextX = currentX + dx * speed;
//         const nextY = currentY + dy * speed;

//         gsap.set(trail, { x: nextX, y: nextY });

//         // Next particle follows this one, not the mouse
//         leadX = currentX;
//         leadY = currentY;
//       });
//     });

//     return () => {
//       window.removeEventListener('mousemove', onMouseMove);
//       gsap.ticker.remove(ticker);
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   return (
//     <div className="hidden md:block pointer-events-none fixed inset-0 z-[100]">
      
//       {/* The Magic: SVG Gooey Filter that melts the dots together into smoke */}
//       <svg className="hidden">
//         <defs>
//           <filter id="smoke-goo">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
//             <feColorMatrix 
//               in="blur" 
//               mode="matrix" 
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" 
//               result="smoke-goo" 
//             />
//             <feComposite in="SourceGraphic" in2="smoke-goo" operator="atop" />
//           </filter>
//         </defs>
//       </svg>

//       {/* Apply the filter container */}
//       <div 
//         style={{ filter: 'url(#smoke-goo)' }} 
//         className="absolute inset-0 mix-blend-multiply dark:mix-blend-screen opacity-70"
//       >
//         {/* Render the trailing particles */}
//         {[...Array(trailCount)].map((_, i) => (
//           <div
//             key={i}
//             ref={(el) => (trailRefs.current[i] = el)}
//             className="absolute bg-violet-600 dark:bg-violet-400 rounded-full"
//             style={{
//               width: `${30 - i * 1.8}px`, // Particles get smaller towards the tail
//               height: `${30 - i * 1.8}px`,
//               opacity: 1 - i * 0.05,      // Particles fade out towards the tail
//             }}
//           />
//         ))}
        
//         {/* Main Cursor Head */}
//         <div
//           ref={cursorRef}
//           className="absolute w-8 h-8 bg-violet-800 dark:bg-white rounded-full"
//         />
//       </div>
//     </div>
//   );
// }

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const trailRefs = useRef([]);
  const [cursorText, setCursorText] = useState("");
  const trailCount = 15; // Number of particles in the smoke trail

  useGSAP(() => {
    // Hide default cursor on desktop
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.style.cursor = 'none';

    const trailElements = trailRefs.current;
    
    // Initial coordinates
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // Center all particles on load
    gsap.set(cursorRef.current, { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });
    gsap.set(textRef.current, { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });
    gsap.set(trailElements, { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseOver = (e) => {
      // Retain the context-aware hover logic!
      const target = e.target.closest('[data-cursor]');
      
      if (target) {
        setCursorText(target.getAttribute('data-cursor'));
        gsap.to(cursorRef.current, { width: 40, height: 40, duration: 0.3 });
        gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
      } else if (e.target.closest('a, button')) {
        gsap.to(cursorRef.current, { width: 10, height: 10, duration: 0.3 });
        gsap.to(textRef.current, { opacity: 0, scale: 0, duration: 0.2 });
      } else {
        gsap.to(cursorRef.current, { width: 32, height: 32, duration: 0.3 });
        gsap.to(textRef.current, { opacity: 0, scale: 0, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // GSAP Ticker for smooth physics-based trailing
    const ticker = gsap.ticker.add(() => {
      // 1. Move the main cursor head and text container instantly
      gsap.set(cursorRef.current, { x: mouse.x, y: mouse.y });
      gsap.set(textRef.current, { x: mouse.x, y: mouse.y });

      // 2. Calculate the fluid trail
      let leadX = mouse.x;
      let leadY = mouse.y;

      trailElements.forEach((trail) => {
        const currentX = gsap.getProperty(trail, "x");
        const currentY = gsap.getProperty(trail, "y");

        // The math that creates the fluid/smoke delay
        const dx = leadX - currentX;
        const dy = leadY - currentY;
        
        // Lower number = longer, more fluid smoke tail
        const speed = 0.35; 
        
        const nextX = currentX + dx * speed;
        const nextY = currentY + dy * speed;

        gsap.set(trail, { x: nextX, y: nextY });

        // Next particle follows this one, not the mouse
        leadX = currentX;
        leadY = currentY;
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      gsap.ticker.remove(ticker);
      document.body.style.cursor = 'auto';
    };
  });

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      
      {/* The Magic: SVG Gooey Filter that melts the dots together into smoke */}
      <svg className="hidden">
        <defs>
          <filter id="smoke-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" 
              result="smoke-goo" 
            />
            <feComposite in="SourceGraphic" in2="smoke-goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Apply the filter container */}
      <div 
        style={{ filter: 'url(#smoke-goo)' }} 
        className="absolute inset-0 mix-blend-multiply dark:mix-blend-screen opacity-70"
      >
        {/* Render the trailing particles */}
        {[...Array(trailCount)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (trailRefs.current[i] = el)}
            className="absolute bg-violet-600 dark:bg-violet-400 rounded-full"
            style={{
              width: `${30 - i * 1.8}px`, // Particles get smaller towards the tail
              height: `${30 - i * 1.8}px`,
              opacity: 1 - i * 0.05,      // Particles fade out towards the tail
            }}
          />
        ))}
        
        {/* Main Cursor Head */}
        <div
          ref={cursorRef}
          className="absolute w-8 h-8 bg-violet-800 dark:bg-white rounded-full transition-all duration-300"
        />
      </div>

      {/* Text Container kept OUTSIDE the goo filter 
        so the text doesn't melt and become unreadable 
      */}
      <div ref={textRef} className="absolute flex items-center justify-center pointer-events-none">
        <span className="text-white dark:text-gray-950 text-[10px] font-black tracking-widest opacity-0 scale-0 transition-all duration-300">
          {cursorText}
        </span>
      </div>

    </div>
  );
}