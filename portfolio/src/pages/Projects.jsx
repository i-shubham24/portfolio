// import { useEffect, useState, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ExternalLink, Code } from 'lucide-react';
// import { FiGithub } from 'react-icons/fi';

// gsap.registerPlugin(ScrollTrigger);

// export default function Projects() {
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const galleryRef = useRef(null);

//   const projectDetails = {
//     "pathseeker": { 
//       liveLink: "https://github.com/i-shubham24/pathseeker",
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
//       description: "MERN-based courses marketplace for buying tech courses and earning referral bonuses."
//     },
//     "portfolio": {
//       liveLink: "https://github.com/i-shubham24/portfolio",
//       image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop", 
//       description: "A highly interactive, GSAP-animated portfolio showcasing full-stack MERN development and Machine Learning engineering."
//     },
//     "RMS": {
//       liveLink: "https://github.com/i-shubham24/RMS",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
//       description: "A Restaurant Recommendation System based on Python ML, Streamlit, KNN model with integrated Google Map."
//     },
//     "DermAI": {
//       liveLink: "https://github.com/i-shubham24/DermAI",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop", 
//       description: "Skin Analyzer project using OpenCV, Machine Learning, Deep Learning and Streamlit UI."
//     },
//     "gigflow-smart-leads-dashboard": {
//       liveLink: "https://github.com/i-shubham24/gigflow-smart-leads-dashboard",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", 
//       description: "A data-driven analytics dashboard designed to intelligently track and manage lead flows."
//     },
//     "my-credex-audit-tool": {
//       liveLink: "https://github.com/i-shubham24/my-credex-audit-tool",
//       image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", 
//       description: "An automated auditing tool built to evaluate system security and streamline credential exchanges."
//     }
//   };

//   useEffect(() => {
//     fetch('https://api.github.com/users/i-shubham24/repos')
//       .then(res => res.json())
//       .then(data => {
//         setRepos(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Failed to fetch repos", err);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (!loading && repos.length > 0) {
//       gsap.fromTo('.project-card', 
//         { y: 50, opacity: 0 },
//         { 
//           y: 0, 
//           opacity: 1, 
//           duration: 0.6, 
//           stagger: 0.1,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: galleryRef.current,
//             start: "top 85%",
//           }
//         }
//       );
//     }
//   }, [loading, repos]);

//   return (
//     <div className="min-h-screen pt-28 px-4 pb-16">
//       <div className="max-w-6xl mx-auto" ref={galleryRef}>
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-violet-900 dark:text-white mb-4 tracking-tighter transition-colors">
//             Featured Projects
//           </h2>
//           <p className="text-violet-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
//             A collection of my recent work in MERN stack development, machine learning, and data science. Pulled directly from GitHub.
//           </p>
//         </div>
        
//         {loading ? (
//           <div className="flex justify-center items-center h-64 text-violet-500 dark:text-violet-400 animate-pulse">
//             <Code size={48} />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
//             {repos.map((repo) => {
//                // This line now successfully finds the match!
//                const customDetails = projectDetails[repo.name] || {};
               
//                return (
//                 <div 
//                   key={repo.id}
//                   data-cursor="VIEW" 
//                   onMouseMove={(e) => {
//                     const card = e.currentTarget;
//                     const rect = card.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;
//                     const centerX = rect.width / 2;
//                     const centerY = rect.height / 2;
                    
//                     const rotateX = ((y - centerY) / centerY) * -8; 
//                     const rotateY = ((x - centerX) / centerX) * 8;
                    
//                     gsap.to(card, {
//                       rotateX: rotateX,
//                       rotateY: rotateY,
//                       transformPerspective: 1000,
//                       ease: 'power2.out',
//                       duration: 0.5
//                     });
                    
//                     const glare = card.querySelector('.glare');
//                     if (glare) {
//                       gsap.to(glare, { x: x - rect.width, y: y - rect.height, opacity: 0.5, duration: 0.5 });
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     const card = e.currentTarget;
//                     gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'elastic.out(1, 0.3)', duration: 1.5 });
//                     const glare = card.querySelector('.glare');
//                     if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
//                   }}
//                   className="project-card relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-100 dark:border-gray-800 flex flex-col h-full transform-gpu z-10 hover:z-20 shadow-lg shadow-violet-100/50 dark:shadow-none transition-shadow duration-300 hover:shadow-violet-300/50 dark:hover:shadow-violet-900/20"
//                 >
                  
//                   <div className="glare absolute inset-0 w-[200%] h-[200%] bg-white/40 dark:bg-white/10 rounded-full blur-3xl pointer-events-none opacity-0 z-50 mix-blend-overlay"></div>
                  
//                   <div className="h-48 bg-violet-100 dark:bg-gray-800 relative group overflow-hidden">
                    
//                     <div className="absolute inset-4 border-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 group-hover:scale-100 z-30 pointer-events-none">
//                       <div className="absolute -top-3 left-[-2px] bg-emerald-400 text-gray-950 text-[10px] font-mono font-bold px-1.5 py-0.5">
//                         project_img 0.99
//                       </div>
//                       <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white"></div>
//                       <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white"></div>
//                       <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white"></div>
//                       <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white"></div>
                      
//                       <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-300 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
//                     </div>

//                     {customDetails.image ? (
//                        <img src={customDetails.image} alt={repo.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
//                     ) : (
//                        <div className="flex flex-col items-center justify-center h-full text-violet-400 dark:text-gray-500 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-900">
//                           <Code size={40} className="mb-2 opacity-50" />
//                           <span className="text-sm font-medium text-center px-4">Auto-generated<br/><span className="text-xs">{repo.name}</span></span>
//                        </div>
//                     )}
//                   </div>
                  
//                   <div className="p-6 flex flex-col flex-grow relative z-20">
//                     <h3 className="text-xl font-bold text-violet-900 dark:text-violet-100 mb-2 truncate transition-colors" title={repo.name}>
//                       {repo.name}
//                     </h3>
//                     <p className="text-violet-600 dark:text-gray-400 mb-6 text-sm flex-grow line-clamp-3 transition-colors">
//                       {/* Prefers your custom description, otherwise falls back to GitHub's */}
//                       {customDetails.description || repo.description || "No description provided."}
//                     </p>
                    
//                     <div className="flex justify-between items-center mt-auto pt-4 border-t border-violet-100 dark:border-gray-800 transition-colors">
//                       <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-violet-500 dark:text-gray-400 hover:text-violet-800 dark:hover:text-violet-300 font-semibold transition-colors pointer-events-auto relative z-30">
//                         <FiGithub size={16}/> Code
//                       </a>
//                       {customDetails.liveLink && (
//                         <a href={customDetails.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full hover:bg-violet-200 dark:hover:bg-violet-900/50 font-semibold transition-colors pointer-events-auto relative z-30">
//                           <ExternalLink size={16}/> Live
//                         </a>
//                       )}
//                     </div>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code, Network, Sparkles, Utensils, ScanFace, LineChart, ShieldCheck } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);

  // === REPLACED IMAGES WITH SLEEK MONOCHROME ICONS ===
  const projectDetails = {
    "pathseeker": { 
      liveLink: "https://github.com/i-shubham24/pathseeker",
      icon: <Network size={64} strokeWidth={1} />, // E-learning / Network
      description: "MERN-based courses marketplace for buying tech courses and earning referral bonuses."
    },
    "portfolio": {
      liveLink: "https://github.com/i-shubham24/portfolio",
      icon: <Sparkles size={64} strokeWidth={1} />, // Interactive / Shiny
      description: "A highly interactive, GSAP-animated portfolio showcasing full-stack MERN development and Machine Learning engineering."
    },
    "RMS": {
      liveLink: "https://github.com/i-shubham24/RMS",
      icon: <Utensils size={64} strokeWidth={1} />, // Restaurant
      description: "A Restaurant Recommendation System based on Python ML, Streamlit, KNN model with integrated Google Map."
    },
    "DermAI": {
      liveLink: "https://github.com/i-shubham24/DermAI",
      icon: <ScanFace size={64} strokeWidth={1} />, // Biometric / Face Scan
      description: "Skin Analyzer project using OpenCV, Machine Learning, Deep Learning and Streamlit UI."
    },
    "gigflow-smart-leads-dashboard": {
      liveLink: "https://github.com/i-shubham24/gigflow-smart-leads-dashboard",
      icon: <LineChart size={64} strokeWidth={1} />, // Analytics
      description: "A data-driven analytics dashboard designed to intelligently track and manage lead flows."
    },
    "my-credex-audit-tool": {
      liveLink: "https://github.com/i-shubham24/my-credex-audit-tool",
      icon: <ShieldCheck size={64} strokeWidth={1} />, // Cyber Security
      description: "An automated auditing tool built to evaluate system security and streamline credential exchanges."
    }
  };

  useEffect(() => {
    fetch('https://api.github.com/users/i-shubham24/repos')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch repos", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && repos.length > 0) {
      gsap.fromTo('.project-card', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, [loading, repos]);

  return (
    <div className="min-h-screen pt-36 px-4 pb-16">
      <div className="max-w-6xl mx-auto" ref={galleryRef}>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-violet-900 dark:text-white mb-4 tracking-tighter transition-colors">
            Featured Projects
          </h2>
          <p className="text-violet-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
            A collection of my recent work in MERN stack development, machine learning, and data science. Pulled directly from GitHub.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64 text-violet-500 dark:text-violet-400 animate-pulse">
            <Code size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {repos.map((repo) => {
               const customDetails = projectDetails[repo.name] || {};
               
               return (
                <div 
                  key={repo.id}
                  data-cursor="VIEW" 
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -8; 
                    const rotateY = ((x - centerX) / centerX) * 8;
                    
                    gsap.to(card, {
                      rotateX: rotateX,
                      rotateY: rotateY,
                      transformPerspective: 1000,
                      ease: 'power2.out',
                      duration: 0.5
                    });
                    
                    const glare = card.querySelector('.glare');
                    if (glare) {
                      gsap.to(glare, { x: x - rect.width, y: y - rect.height, opacity: 0.5, duration: 0.5 });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'elastic.out(1, 0.3)', duration: 1.5 });
                    const glare = card.querySelector('.glare');
                    if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
                  }}
                  className="project-card relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-100 dark:border-gray-800 flex flex-col h-full transform-gpu z-10 hover:z-20 shadow-lg shadow-violet-100/50 dark:shadow-none transition-shadow duration-300 hover:shadow-violet-300/50 dark:hover:shadow-violet-900/20"
                >
                  
                  <div className="glare absolute inset-0 w-[200%] h-[200%] bg-white/40 dark:bg-white/10 rounded-full blur-3xl pointer-events-none opacity-0 z-50 mix-blend-overlay"></div>
                  
                  {/* === MONOCHROME LOGO WRAPPER === */}
                  <div className="h-48 bg-gray-50 dark:bg-gray-950 border-b border-violet-100 dark:border-gray-800 relative group overflow-hidden flex items-center justify-center">
                    
                    {/* Subtle Engineering Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    {/* Center Icon */}
                    <div className="relative z-10 text-gray-400 dark:text-gray-600 group-hover:text-violet-600 dark:group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out drop-shadow-md">
                      {customDetails.icon ? customDetails.icon : <Code size={64} strokeWidth={1} />}
                    </div>

                    {/* The YOLOv8 Bounding Box Simulation (Still scans over the logo perfectly) */}
                    <div className="absolute inset-4 border-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 group-hover:scale-100 z-30 pointer-events-none">
                      <div className="absolute -top-3 left-[-2px] bg-emerald-400 text-gray-950 text-[10px] font-mono font-bold px-1.5 py-0.5">
                        model_detected 0.99
                      </div>
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white"></div>
                      
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-300 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <h3 className="text-xl font-bold text-violet-900 dark:text-violet-100 mb-2 truncate transition-colors" title={repo.name}>
                      {repo.name}
                    </h3>
                    <p className="text-violet-600 dark:text-gray-400 mb-6 text-sm flex-grow line-clamp-3 transition-colors">
                      {customDetails.description || repo.description || "No description provided."}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-violet-100 dark:border-gray-800 transition-colors">
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-violet-500 dark:text-gray-400 hover:text-violet-800 dark:hover:text-violet-300 font-semibold transition-colors pointer-events-auto relative z-30">
                        <FiGithub size={16}/> Code
                      </a>
                      {customDetails.liveLink && (
                        <a href={customDetails.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full hover:bg-violet-200 dark:hover:bg-violet-900/50 font-semibold transition-colors pointer-events-auto relative z-30">
                          <ExternalLink size={16}/> Live
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}