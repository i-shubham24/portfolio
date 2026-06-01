// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Download, ArrowRight } from 'lucide-react';
// import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

// export default function Home() {
//   const container = useRef(null);
//   useGSAP(() => {
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//     tl.from('.hero-text', { y: 100, opacity: 0, duration: 1, stagger: 0.2, delay: 0.2 })
//       .from('.social-icon', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");
//   }, { scope: container });

//   return (
//     <div ref={container} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
//       <div className="relative z-10 max-w-4xl text-center">
//         <h2 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-violet-900 dark:text-white transition-colors duration-500">
//           Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400">Shubhampreet Singh</span>
//         </h2>
//         <p className="hero-text text-xl md:text-2xl text-violet-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-500">
//           MCA Student & Developer specializing in MERN Stack & Machine Learning. Building scalable web apps and intelligent AI solutions.
//         </p>
        
//         <div className="hero-text flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
//           <a 
//             href="/ShubhampreetSingh_InternshalaResume.pdf" 
//             download 
//             className="flex items-center gap-2 bg-violet-700 dark:bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-800 dark:hover:bg-violet-500 transition-all shadow-lg shadow-violet-200 dark:shadow-none hover:-translate-y-1 w-full sm:w-auto justify-center"
//           >
//             <Download size={20} /> Download Resume
//           </a>
//           <a 
//             href="#projects" 
//             className="flex items-center gap-2 bg-white dark:bg-gray-900 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 dark:hover:bg-gray-800 transition-all shadow-sm hover:-translate-y-1 w-full sm:w-auto justify-center"
//           >
//             View Work <ArrowRight size={20} />
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://github.com/i-shubham24" target="_blank" rel="noreferrer" className="social-icon p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:scale-110 hover:text-violet-700 dark:hover:text-violet-300 transition-all text-violet-400 dark:text-gray-400 border border-transparent dark:border-gray-700">
//             <FiGithub size={24} />
//           </a>
//           <a href="https://linkedin.com/in/shubhampreet-singh-12584824a" target="_blank" rel="noreferrer" className="social-icon p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:scale-110 hover:text-violet-700 dark:hover:text-violet-300 transition-all text-violet-400 dark:text-gray-400 border border-transparent dark:border-gray-700">
//             <FiLinkedin size={24} />
//           </a>
//           <a href="https://instagram.com/shubh.ramgharia" target="_blank" rel="noreferrer" className="social-icon p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:scale-110 hover:text-violet-700 dark:hover:text-violet-300 transition-all text-violet-400 dark:text-gray-400 border border-transparent dark:border-gray-700">
//             <FiInstagram size={24} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Download, ArrowRight } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Magnetic from '../components/Magnetic';

export default function Home() {
  const container = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-text', { y: 100, opacity: 0, duration: 1, stagger: 0.2, delay: 0.2 })
      .from('.social-icon', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");
  }, { scope: container });

  // Smooth scroll logic for the "View Work" button
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    // FIX: pointer-events-none added here so clicks pass through to the background shapes!
    <div ref={container} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4 pointer-events-none z-10">
      
      {/* FIX: pointer-events-auto added here so your buttons/text are still clickable */}
      <div className="relative z-10 max-w-4xl text-center pointer-events-auto">
        
        <h2 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-violet-900 dark:text-white transition-colors duration-500">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400">Shubhampreet Singh</span>
        </h2>
        <p className="hero-text text-xl md:text-2xl text-violet-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-500">
          MCA Student & Developer specializing in MERN Stack & Machine Learning. Building scalable web apps and intelligent AI solutions.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          
          <Magnetic strength={0.4}>
            <a 
              href="/ShubhampreetSingh_InternshalaResume.pdf" 
              download 
              className="flex items-center gap-2 bg-violet-700 dark:bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-800 dark:hover:bg-violet-500 transition-all shadow-lg shadow-violet-200 dark:shadow-none hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Download size={20} /> Download Resume
            </a>
          </Magnetic>

          <Magnetic strength={0.4}>
            <a 
              href="#projects" 
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 bg-white dark:bg-gray-900 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 dark:hover:bg-gray-800 transition-all shadow-sm hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              View Work <ArrowRight size={20} />
            </a>
          </Magnetic>
        </div>

        <div className="flex justify-center gap-6">
          <Magnetic strength={0.3}>
            {/* Changed from p-4 to fixed w/h so magnetic centers perfectly on the icon */}
            <a href="https://github.com/i-shubham24" target="_blank" rel="noreferrer" className="social-icon flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:scale-110 hover:text-violet-700 dark:hover:text-violet-300 transition-all text-violet-400 dark:text-gray-400 border border-transparent dark:border-gray-700">
              <FiGithub size={24} />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a href="https://linkedin.com/in/shubhampreet-singh-12584824a" target="_blank" rel="noreferrer" className="social-icon flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:scale-110 hover:text-violet-700 dark:hover:text-violet-300 transition-all text-violet-400 dark:text-gray-400 border border-transparent dark:border-gray-700">
              <FiLinkedin size={24} />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a href="https://instagram.com/shubh.ramgharia" target="_blank" rel="noreferrer" className="social-icon flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:scale-110 hover:text-violet-700 dark:hover:text-violet-300 transition-all text-violet-400 dark:text-gray-400 border border-transparent dark:border-gray-700">
              <FiInstagram size={24} />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}