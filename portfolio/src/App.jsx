import { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import SolidScrollShapes from './components/SolidScrollShapes';
import Marquee from './components/Marquee';

import Preloader from './components/Preloader';
import ScrollRing from './components/ScrollRing';
import TerminalModal from './components/TerminalModal';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // === THE FIX ===
  // When loading finishes and the page expands, force GSAP to recalculate the scroll heights
  useEffect(() => {
    if (loadingComplete) {
      // We use a tiny 100ms timeout to ensure React has fully removed the 'overflow-hidden' classes first
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [loadingComplete]);

  return (
    <>
      {!loadingComplete && <Preloader onComplete={() => setLoadingComplete(true)} />}

      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
        
        <CustomCursor />
        <AnimatedBackground />
        
        {/* The 3D Scroll Shapes */}
        <SolidScrollShapes />
        
        <ScrollRing />
        <TerminalModal />
        
        <div className={`flex flex-col min-h-screen font-sans selection:bg-violet-300 dark:selection:bg-violet-700 transition-colors duration-500 relative z-10 text-violet-900 dark:text-gray-100 ${!loadingComplete ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
          
          <Header />
          
          <main className="flex-grow">
            <section id="home"><Home /></section>
            <Marquee text="MERN STACK • MACHINE LEARNING • FULL STACK DEV • AI ENGINEER" />
            <section id="projects"><Projects /></section>
            <Marquee text="REACT • NODEJS • PYTHON • YOLOV8 • TAILWIND CSS" direction={1} />
            <section id="skills"><Skills /></section>
            <section id="about"><About /></section>
          </main>

          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;