import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaYoutube, FaBriefcase, FaCertificate } from 'react-icons/fa';
import Magnetic from '../components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.reveal-text').forEach((text) => {
      gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 85%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });
    });

    gsap.from('.timeline-item', {
      scrollTrigger: { trigger: '.timeline-container', start: "top 80%" },
      x: -50, opacity: 0, duration: 0.8, stagger: 0.3, ease: "power3.out"
    });
  }, { scope: container });

  const experiences = [
    {
      type: 'Training',
      role: 'Machine Learning Trainee',
      company: 'Sensation Solutions',
      location: 'Mohali',
      duration: 'Jun 2025 - Jul 2025',
      description: 'Completed comprehensive training covering supervised and unsupervised learning, model evaluation, and practical project implementation. Developed a K-Nearest Neighbors Restaurant Recommendation System.',
      icon: <FaCertificate className="text-violet-500 dark:text-violet-400 text-xl" />
    },
    {
      type: 'Internship',
      role: 'Web Development Intern',
      company: 'Offcampuscareer',
      location: 'Virtual',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Contributed to the design and implementation of responsive web applications in an agile team environment. Gained hands-on experience with HTML, CSS, JavaScript, Bootstrap, and WordPress.',
      icon: <FaBriefcase className="text-violet-500 dark:text-violet-400 text-xl" />
    }
  ];

  return (
    <div ref={container} className="min-h-screen pt-28 px-4 pb-20 overflow-hidden relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Standard Static Title */}
        <div className="text-center mb-20 reveal-text">
          <h2 className="text-5xl font-black text-violet-900 dark:text-white mb-6 tracking-tight transition-colors">
            Behind the Code
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          
          {/* Developer Journey Box */}
          <div className="space-y-6 text-lg text-violet-800 dark:text-gray-300 leading-relaxed reveal-text transition-colors bg-white/40 dark:bg-gray-900/40 p-8 rounded-3xl border border-violet-100 dark:border-gray-800 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-200/50 dark:hover:shadow-violet-900/20 duration-500">
            <h3 className="text-2xl font-bold text-violet-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-sm">👨‍💻</span>
              The Developer Journey
            </h3>
            <p>
              I recently completed my MCA at the Amritsar Group of Colleges (Batch of 2024-2026), building upon a strong foundation from my BCA. 
            </p>
            <p>
              My focus bridges the gap between full-stack web development and artificial intelligence. Whether it is engineering a MERN-based digital marketplace or developing computer vision models like DermAI using YOLOv8, I thrive on building scalable, intelligent solutions that solve real-world problems.
            </p>
          </div>
          
          {/* Upgraded YouTube Creator Box */}
          <div className="space-y-6 text-lg text-violet-800 dark:text-gray-300 leading-relaxed reveal-text bg-white/40 dark:bg-gray-900/40 p-8 rounded-3xl border border-violet-100 dark:border-gray-800 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 dark:hover:shadow-red-900/20 duration-500 group">
            <h3 className="text-2xl font-bold text-violet-900 dark:text-white flex items-center gap-3">
              <Magnetic strength={0.4}>
                <div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-xl group-hover:scale-110 transition-transform">
                  <FaYoutube className="text-red-500 text-2xl" />
                </div>
              </Magnetic>
              Digital Creator
            </h3>
            <p>
              Beyond traditional software engineering, I am deeply ingrained in the digital media ecosystem. I am the founder and manager of the "Cricketz Family and Abhishek Sherma" YouTube channel network. 
            </p>
            <p>
              This venture has given me hands-on expertise in end-to-end content creation, advanced SEO optimization, algorithmic audience growth, and navigating the legal complexities of digital media monetization and copyright compliance.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="reveal-text mb-10 timeline-container max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-violet-900 dark:text-white mb-12 text-center transition-colors">
            Experience & Training
          </h3>
          
          <div className="relative border-l-2 border-violet-200 dark:border-gray-800 ml-4 md:ml-8 space-y-12 transition-colors">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative pl-10 md:pl-16 group">
                
                {/* Timeline Node */}
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-white dark:bg-gray-950 border-4 border-violet-300 dark:border-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-200 dark:shadow-none z-10 transition-colors group-hover:border-fuchsia-500 group-hover:scale-110 duration-300">
                  {exp.icon}
                </div>
                
                {/* Content Card */}
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-violet-50 dark:border-gray-800 shadow-lg shadow-violet-100/40 dark:shadow-none hover:shadow-xl hover:shadow-violet-200/50 dark:hover:shadow-violet-900/30 transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h4 className="text-2xl font-bold text-violet-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">{exp.role}</h4>
                      <p className="text-lg font-medium text-violet-600 dark:text-violet-400">
                        {exp.company} <span className="text-violet-400 dark:text-gray-600 text-sm">| {exp.location}</span>
                      </p>
                    </div>
                    <span className="inline-block bg-violet-100 dark:bg-gray-800 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap w-fit border border-violet-200 dark:border-gray-700">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-violet-700 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}