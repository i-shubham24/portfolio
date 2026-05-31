import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);

  const projectDetails = {
    "DermaAI": {
      liveLink: "https://your-streamlit-app-link.streamlit.app",
      image: "/images/ai-derma-concept.jpg", 
      description: "AI-powered skin analysis application utilizing a YOLOv8 model for computer vision-based skin detection."
    },
    "PathSeeker": {
      liveLink: "https://your-vercel-app-link.vercel.app",
      image: "/images/ai-marketplace-concept.jpg",
      description: "MERN-based courses marketplace for buying tech courses and earning referral bonuses."
    },
    "Restaurant-Recommendation": {
      liveLink: "https://your-restaurant-streamlit.streamlit.app",
      image: "/images/ai-restaurant-data.jpg",
      description: "Streamlit-based system using KNN to suggest restaurants based on user preferences."
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
    <div className="min-h-screen pt-28 px-4 pb-16">
      <div className="max-w-6xl mx-auto" ref={galleryRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-900 dark:text-white mb-4 transition-colors">Featured Projects</h2>
          <p className="text-violet-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
            A collection of my recent work in MERN stack development, machine learning, and data science. Pulled directly from GitHub.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64 text-violet-500 dark:text-violet-400 animate-pulse">
            <Code size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => {
               const customDetails = projectDetails[repo.name] || {};
               
               return (
                <div key={repo.id} className="project-card bg-white dark:bg-gray-900 rounded-2xl shadow-lg shadow-violet-100/50 dark:shadow-none overflow-hidden hover:shadow-2xl hover:shadow-violet-200 dark:hover:shadow-gray-900/50 transition-all duration-300 flex flex-col h-full border border-violet-50 dark:border-gray-800">
                  
                  <div className="h-48 bg-violet-100 dark:bg-gray-800 relative group overflow-hidden">
                    {customDetails.image ? (
                       <img src={customDetails.image} alt={repo.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                       <div className="flex flex-col items-center justify-center h-full text-violet-400 dark:text-gray-500 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-900">
                          <Code size={40} className="mb-2 opacity-50" />
                          <span className="text-sm font-medium">Auto-generated</span>
                       </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-violet-900 dark:text-violet-100 mb-2 truncate transition-colors" title={repo.name}>
                      {repo.name}
                    </h3>
                    <p className="text-violet-600 dark:text-gray-400 mb-6 text-sm flex-grow line-clamp-3 transition-colors">
                      {customDetails.description || repo.description || "No description provided."}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-violet-50 dark:border-gray-800 transition-colors">
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-violet-500 dark:text-gray-400 hover:text-violet-800 dark:hover:text-violet-300 font-semibold transition-colors">
                        <FiGithub size={16}/> Code
                      </a>
                      {customDetails.liveLink && (
                        <a href={customDetails.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full hover:bg-violet-200 dark:hover:bg-violet-900/50 font-semibold transition-colors">
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