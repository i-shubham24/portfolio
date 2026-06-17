import { useEffect, useRef } from 'react';

export default function NeuralNetworkBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Configuration
    const particleCount = window.innerWidth < 768 ? 40 : 80; // Less nodes on mobile for performance
    const connectDistance = 150; // How close nodes need to be to connect to each other
    const mouseConnectDistance = 200; // How close the mouse needs to be to snap to a node

    let mouse = { x: null, y: null };

    // Resize canvas to perfectly fit screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Track mouse position
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Release mouse connections when leaving the window
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // The Node Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8; // Velocity X
        this.vy = (Math.random() - 0.5) * 0.8; // Velocity Y
        this.radius = Math.random() * 1.5 + 0.5; // Size of the node
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.4)'; // Violet node
        ctx.fill();
      }
    }

    // Initialize nodes
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // The Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      const baseOpacity = isDark ? 0.3 : 0.15;
      const mouseOpacity = isDark ? 0.6 : 0.4;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // 1. Draw connections between nodes
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - (distance / connectDistance)) * baseOpacity;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Violet connection
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // 2. Draw connections to the mouse (The "AI Scanner" effect)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseConnectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = (1 - (distance / mouseConnectDistance)) * mouseOpacity;

            // Mouse connections glow Fuchsia to stand out
            ctx.strokeStyle = `rgba(217, 70, 239, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Find this line in NeuralNetworkBg.jsx
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none mix-blend-screen dark:mix-blend-plus-lighter opacity-70 dark:opacity-100"
    />
  );
}