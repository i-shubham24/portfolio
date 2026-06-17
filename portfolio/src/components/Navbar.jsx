// import { useState, useEffect } from 'react';
// import { Sun, Moon, Menu, X } from 'lucide-react';

// export default function Header() {
//   const [isDark, setIsDark] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     } else {
//       setIsDark(false);
//       document.documentElement.classList.remove('dark');
//     }

//     // Scroll spy to highlight active nav link
//     const handleScroll = () => {
//       const sections = ['home', 'projects', 'skills', 'about'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
//           setActiveSection(section);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const root = document.documentElement;
//     if (isDark) {
//       root.classList.remove('dark');
//       localStorage.theme = 'light';
//       setIsDark(false);
//     } else {
//       root.classList.add('dark');
//       localStorage.theme = 'dark';
//       setIsDark(true);
//     }
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home', id: 'home' },
//     { name: 'Projects', href: '#projects', id: 'projects' },
//     { name: 'Skills', href: '#skills', id: 'skills' },
//     { name: 'About', href: '#about', id: 'about' },
//   ];

//   const handleSmoothScroll = (e, href) => {
//     e.preventDefault();
//     setIsMobileMenuOpen(false); // Close mobile menu on click
//     const target = document.querySelector(href);
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <nav className="fixed w-full z-50 bg-violet-50/70 dark:bg-gray-950/70 backdrop-blur-md border-b border-violet-100 dark:border-gray-800 transition-colors duration-500">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        
//         <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-2xl font-bold text-violet-800 dark:text-violet-400 tracking-tighter hover:scale-105 transition-transform">
//           SS.
//         </a>
        
//         <div className="flex items-center gap-4 md:gap-6">
//           <div className="hidden md:flex gap-6">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href}
//                 onClick={(e) => handleSmoothScroll(e, link.href)}
//                 className={`font-medium transition-colors ${
//                   activeSection === link.id
//                     ? 'text-violet-800 dark:text-violet-400 border-b-2 border-violet-600 dark:border-violet-500' 
//                     : 'text-violet-500 dark:text-gray-400 hover:text-violet-700 dark:hover:text-violet-300'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           <button onClick={toggleTheme} className="p-2 rounded-full bg-violet-100 dark:bg-gray-800 text-violet-600 dark:text-violet-300 hover:scale-110 transition-all duration-300">
//             {isDark ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-violet-800 dark:text-violet-300">
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU WITH HEAVY BLUR & READABLE BACKGROUND */}
//       <div className={`md:hidden fixed inset-0 bg-violet-50/95 dark:bg-gray-950/95 backdrop-blur-3xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-28 px-6 z-40`}>
//         <div className="flex flex-col gap-8 text-2xl font-bold text-center">
//           {navLinks.map((link) => (
//             <a 
//               key={link.name} 
//               href={link.href}
//               onClick={(e) => handleSmoothScroll(e, link.href)}
//               className="pb-4 border-b border-violet-200 dark:border-gray-800 text-violet-800 dark:text-gray-200 active:text-violet-500"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Moon, Sun } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Navbar() {
  const navRef = useRef(null);

  // We check for dark mode. Adjust this if you use a specific dark mode hook!
  const isDark = document.documentElement.classList.contains('dark');

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    // Force a re-render or trigger your theme state here if needed
  };

  useEffect(() => {
    // Drop-in animation on load
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.2 }
    );
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-max px-4">
      <nav 
        ref={navRef}
        className="flex items-center gap-2 md:gap-6 px-6 py-3 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border border-violet-100 dark:border-gray-800 rounded-full shadow-2xl shadow-violet-500/10 dark:shadow-none transition-colors duration-500"
      >
        
        {/* Your Initial / Logo */}
        <Magnetic strength={0.2}>
          <div 
            onClick={() => scrollTo('home')}
            className="cursor-pointer font-black text-xl tracking-tighter text-violet-900 dark:text-white mr-2 md:mr-4"
          >
            SS<span className="text-fuchsia-500">.</span>
          </div>
        </Magnetic>

        {/* Nav Links */}
        <div className="flex items-center gap-1 md:gap-2">
          {['Projects', 'Skills', 'About'].map((item) => (
            <Magnetic strength={0.2} key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="px-3 md:px-4 py-2 rounded-full text-sm font-semibold text-violet-700 dark:text-gray-300 hover:text-white hover:bg-violet-600 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {item}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-violet-200 dark:bg-gray-700 mx-1 md:mx-2"></div>

        {/* Dark Mode Toggle */}
        <Magnetic strength={0.3}>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-violet-600 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </Magnetic>

      </nav>
    </div>
  );
}