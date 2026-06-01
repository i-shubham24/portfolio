import { ReactLenis } from 'lenis/react';
import SolidScrollShapes from './components/SolidScrollShapes';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Marquee from './components/Marquee';

// Import your pages as sections now
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';

function App() {
  return (
    <>
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}></ReactLenis>
      <CustomCursor />
      <AnimatedBackground />
      <SolidScrollShapes />
      
      <div className="flex flex-col min-h-screen font-sans selection:bg-violet-300 dark:selection:bg-violet-700 transition-colors duration-500 relative z-10 text-violet-900 dark:text-gray-100">
        <Header />
        
        <main className="flex-grow">
          <section id="home">
            <Home />
          </section>

          <Marquee text="MERN STACK • MACHINE LEARNING • FULL STACK DEV • AI ENGINEER" />

          <section id="projects">
            <Projects />
          </section>

          <Marquee text="REACT • NODEJS • PYTHON • YOLOV8 • TAILWIND CSS" direction={1} />

          <section id="skills">
            <Skills />
          </section>

          <section id="about">
            <About />
          </section>
        </main>
        <Footer />
      </div>
      <ReactLenis />
    </>
  );
}

export default App;