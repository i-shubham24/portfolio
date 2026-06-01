import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. THE TOP NAVBAR (z-index 50) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-violet-100 dark:border-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-2xl font-bold text-violet-800 dark:text-violet-400 tracking-tighter hover:scale-105 transition-transform">
            SS.
          </a>
          
          <div className="flex items-center gap-4 md:gap-6">
            
            {/* Desktop Links */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-violet-800 dark:text-violet-400 border-b-2 border-violet-600 dark:border-violet-500' 
                      : 'text-violet-500 dark:text-gray-400 hover:text-violet-700 dark:hover:text-violet-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button onClick={toggleTheme} className="p-2 rounded-full bg-violet-100 dark:bg-gray-800 text-violet-600 dark:text-violet-300 hover:scale-110 transition-all duration-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-violet-800 dark:text-violet-300 relative z-50">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. THE MOBILE MENU OVERLAY (z-index 40) - Completely separated from the Nav! */}
      <div className={`md:hidden fixed inset-0 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        
        {/* Soft Ambient Glows for aesthetics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-fuchsia-400/20 dark:bg-fuchsia-600/20 rounded-full blur-[80px]"></div>
        </div>

        {/* The Menu Links */}
        <div className="relative z-50 flex flex-col gap-8 text-2xl font-bold text-center pt-32 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="pb-4 border-b border-violet-100 dark:border-gray-800 text-violet-900 dark:text-gray-100 active:text-violet-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}