import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-violet-50/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-violet-100 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-violet-800 dark:text-violet-400 tracking-tighter hover:scale-105 transition-transform">
          SS.
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-violet-800 dark:text-violet-400 border-b-2 border-violet-600 dark:border-violet-500' 
                    : 'text-violet-500 dark:text-gray-400 hover:text-violet-700 dark:hover:text-violet-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-violet-100 dark:bg-gray-800 text-violet-600 dark:text-violet-300 hover:scale-110 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}