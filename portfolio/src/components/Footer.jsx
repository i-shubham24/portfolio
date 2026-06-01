// import { FiGithub, FiYoutube, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const socials = [
//     { 
//       name: 'YouTube', 
//       icon: <FiYoutube size={20} />, 
//       href: 'https://youtube.com/@abhisheksherma_4', 
//       color: 'hover:text-red-500 hover:border-red-200 hover:bg-red-50 dark:hover:border-red-900/50 dark:hover:bg-red-500/10' 
//     },
//     { 
//       name: 'GitHub', 
//       icon: <FiGithub size={20} />, 
//       href: 'https://github.com/i-shubham24', 
//       color: 'hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 dark:hover:text-white dark:hover:border-gray-700 dark:hover:bg-gray-800' 
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: <FiLinkedin size={20} />, 
//       href: 'https://www.linkedin.com/in/shubhampreet-singh-12584824a', 
//       color: 'hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-blue-900/50 dark:hover:bg-blue-500/10' 
//     },
//     { 
//       name: 'Instagram', 
//       icon: <FiInstagram size={20} />, 
//       href: 'https://www.instagram.com/shubh.ramgharia', 
//       color: 'hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 dark:hover:border-sky-900/50 dark:hover:bg-sky-500/10' 
//     },
//   ];

//   return (
//     <footer className="relative border-t border-violet-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/40 backdrop-blur-xl mt-20 transition-colors duration-500 z-10">
//       <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

//           {/* Left Side: Logo & Bio */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
//             <a 
//               href="#home" 
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//               }}
//               className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-500 tracking-tighter hover:opacity-80 transition-opacity"
//             >
//               SS.
//             </a>
//             <p className="mt-6 text-violet-700/80 dark:text-gray-400 text-sm leading-relaxed font-medium">
//               Crafting modern, interactive web experiences and AI-driven computer vision applications. Let's build something amazing together.
//             </p>
//           </div>

//           {/* Right Side: Socials & Handles */}
//           <div className="flex flex-col items-center md:items-end">
//             <h3 className="text-sm font-bold text-violet-900 dark:text-gray-200 uppercase tracking-widest mb-6">
//               Connect With Me
//             </h3>
            
//             {/* Social Icon Buttons */}
//             <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
//               {socials.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={social.name}
//                   className={`p-3 rounded-2xl border border-violet-100 dark:border-gray-800/60 text-violet-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${social.color}`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
              
//               {/* Email Button */}
//               <a
//                 href="mailto:shubhamkaler24@gmail.com"
//                 aria-label="Email"
//                 className="p-3 rounded-2xl border border-violet-100 dark:border-gray-800/60 text-violet-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:text-emerald-500 hover:border-emerald-200 hover:bg-emerald-50 dark:hover:border-emerald-900/50 dark:hover:bg-emerald-500/10"
//               >
//                 <FiMail size={20} />
//               </a>
//             </div>

//             {/* Custom YouTube Handle Display */}
//             <a 
//               href="https://youtube.com/@abhisheksherma_4" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-900/30 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all duration-300 group"
//             >
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
//               </span>
//               @abhisheksherma_4
//             </a>
//           </div>
//         </div>

//         {/* Bottom: Copyright & Legal */}
//         <div className="mt-16 pt-8 border-t border-violet-200/50 dark:border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm font-medium text-violet-600/60 dark:text-gray-500">
//             © {currentYear} Shubhampreet Singh. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm font-medium text-violet-600/60 dark:text-gray-500">
//             <span className="hover:text-violet-900 dark:hover:text-violet-300 cursor-pointer transition-colors">Privacy Policy</span>
//             <span className="hover:text-violet-900 dark:hover:text-violet-300 cursor-pointer transition-colors">Terms of Service</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FiGithub, FiYoutube, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { 
      name: 'YouTube', 
      icon: <FiYoutube size={20} />, 
      href: 'https://youtube.com/@cricketz_family', 
      color: 'hover:text-red-500 hover:border-red-200 hover:bg-red-50 dark:hover:border-red-900/50 dark:hover:bg-red-500/10' 
    },
    { 
      name: 'GitHub', 
      icon: <FiGithub size={20} />, 
      href: 'https://github.com/i-shubham24', 
      color: 'hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 dark:hover:text-white dark:hover:border-gray-700 dark:hover:bg-gray-800' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin size={20} />, 
      href: 'https://www.linkedin.com/in/shubhampreet-singh-12584824a', 
      color: 'hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-blue-900/50 dark:hover:bg-blue-500/10' 
    },
    { 
      name: 'WhatsApp', 
      icon: <FaWhatsapp size={20} />, 
      href: 'https://wa.me/9815272708?text=', 
      color: 'hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 dark:hover:border-sky-900/50 dark:hover:bg-sky-500/10' 
    },
    { 
      name: 'Instagram', 
      icon: <FiInstagram size={20} />, 
      href: 'https://www.instagram.com/shubh.ramgharia', 
      color: 'hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 dark:hover:border-pink-900/50 dark:hover:bg-pink-500/10' 
    },
  ];

  return (
    <footer className="relative border-t border-violet-200 dark:border-gray-900 bg-violet-50 dark:bg-gray-950 mt-20 transition-colors duration-500 z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-none">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

          {/* Left Side: Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-500 tracking-tighter hover:opacity-80 transition-opacity"
            >
              SS.
            </a>
            <p className="mt-6 text-violet-800 dark:text-gray-400 text-sm leading-relaxed font-medium">
              Crafting modern, interactive web experiences and AI-driven computer vision applications. Let's build something amazing together.
            </p>
          </div>

          {/* Right Side: Socials & Handles */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-bold text-violet-900 dark:text-gray-200 uppercase tracking-widest mb-6">
              Connect With Me
            </h3>
            
            {/* Social Icon Buttons */}
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className={`p-3 rounded-2xl border border-violet-200 dark:border-gray-800 text-violet-600 dark:text-gray-400 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
              
              {/* Mail Button with Mailto Link */}
              <a
                href="mailto:shubhamkaler24@gmail.com"
                aria-label="Email"
                className="p-3 rounded-2xl border border-violet-200 dark:border-gray-800 text-violet-600 dark:text-gray-400 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:text-emerald-500 hover:border-emerald-200 hover:bg-emerald-50 dark:hover:border-emerald-900/50 dark:hover:bg-emerald-500/10"
              >
                <FiMail size={20} />
              </a>
            </div>

            {/* Custom YouTube Handle Display */}
            <a 
              href="https://youtube.com/@abhisheksherma_4" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-900/40 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all duration-300 group shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              @abhisheksherma_4
            </a>
          </div>
        </div>

        {/* Bottom: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-violet-200 dark:border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-violet-600/80 dark:text-gray-500">
            © {currentYear} Shubhampreet Singh. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-violet-600/80 dark:text-gray-500">
            <span className="hover:text-violet-900 dark:hover:text-violet-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-violet-900 dark:hover:text-violet-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}