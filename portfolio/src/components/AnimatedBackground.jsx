// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// export default function AnimatedBackground() {
//   const bgRef = useRef(null);

//   useGSAP(() => {
//     // Complex organic movement for the background blobs
//     gsap.to('.blob-1', {
//       x: 'random(-100, 100)',
//       y: 'random(-100, 100)',
//       rotation: 'random(0, 360)',
//       duration: 'random(10, 15)',
//       repeat: -1,
//       yoyo: true,
//       ease: 'sine.inOut',
//     });

//     gsap.to('.blob-2', {
//       x: 'random(-150, 150)',
//       y: 'random(-150, 150)',
//       scale: 'random(0.8, 1.2)',
//       duration: 'random(12, 18)',
//       repeat: -1,
//       yoyo: true,
//       ease: 'sine.inOut',
//     });
//   }, { scope: bgRef });

//   return (
//     <div ref={bgRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
//       <div className="blob-1 absolute top-20 right-[10%] w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
//       <div className="blob-2 absolute bottom-20 left-[10%] w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
//       <div className="blob-1 absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
//     </div>
//   );
// }

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AnimatedBackground() {
  const bgRef = useRef(null);
  const shapesRef = useRef([]);

  const colors = ['#8b5cf6', '#d946ef', '#0ea5e9', '#10b981', '#f43f5e'];
  const shapeCount = 20;

  useGSAP(() => {
    // 1. Continuous random floating animation
    shapesRef.current.forEach((shape) => {
      gsap.to(shape, {
        x: `random(-200, 200, 5)`,
        y: `random(-200, 200, 5)`,
        rotation: 'random(-180, 180)',
        duration: 'random(10, 20)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // 2. Interactive Mouse Click Shockwave
    const handleGlobalClick = (e) => {
      const { clientX, clientY } = e;

      shapesRef.current.forEach((shape) => {
        const shapeBounds = shape.getBoundingClientRect();
        const shapeX = shapeBounds.left + shapeBounds.width / 2;
        const shapeY = shapeBounds.top + shapeBounds.height / 2;
        
        // Calculate distance from click
        const distX = shapeX - clientX;
        const distY = shapeY - clientY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Only affect shapes within a certain radius
        if (distance < 500) {
          const pushFactor = (500 - distance) * 0.5; // Closer = harder push
          const angle = Math.atan2(distY, distX);
          
          gsap.to(shape, {
            x: `+=${Math.cos(angle) * pushFactor}`,
            y: `+=${Math.sin(angle) * pushFactor}`,
            rotation: '+=360',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            scale: 'random(0.5, 1.5)',
            duration: 1.5,
            ease: 'expo.out',
          });
        }
      });
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, { scope: bgRef });

  return (
    <div ref={bgRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-violet-50/50 dark:bg-gray-950/80 transition-colors duration-500">
      
      {/* Heavy blur filter for the gooey space effect */}
      <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>

      <div className="absolute inset-0 z-0">
        {[...Array(shapeCount)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (shapesRef.current[i] = el)}
            className="absolute rounded-lg mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: i % 3 === 0 ? '4px' : `${Math.random() * 80 + 20}px`, // Mix of blocks and lines
              borderRadius: i % 2 === 0 ? '50%' : '12px', // Mix of circles and squares
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: colors[i % colors.length],
            }}
          />
        ))}
      </div>
    </div>
  );
}