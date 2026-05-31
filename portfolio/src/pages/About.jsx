import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaReact, FaNodeJs, FaPython, FaYoutube, FaBriefcase, FaCertificate } from 'react-icons/fa';
import { SiMongodb, SiStreamlit, SiJavascript, SiTailwindcss } from 'react-icons/si';

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

    gsap.from('.skill-icon', {
      scrollTrigger: { trigger: '.skills-grid', start: "top 80%" },
      scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)"
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

  const skills = [
    { name: 'React', icon: <FaReact />, color: 'text-sky-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
    { name: 'Streamlit', icon: <SiStreamlit />, color: 'text-red-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  ];

  return (
    <div ref={container} className="min-h-screen pt-28 px-4 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20 reveal-text">
          <h1 className="text-5xl font-extrabold text-violet-900 dark:text-white mb-6 tracking-tight transition-colors">Behind the Code</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6 text-lg text-violet-800 dark:text-gray-300 leading-relaxed reveal-text transition-colors">
            <h3 className="text-2xl font-bold text-violet-900 dark:text-white">The Developer Journey</h3>
            <p>
              I am currently pursuing my MCA at the Amritsar Group of Colleges (Batch of 2024-2026), building upon a strong foundation from my BCA. 
            </p>
            <p>
              My focus bridges the gap between full-stack web development and artificial intelligence. Whether it is engineering a MERN-based digital marketplace or developing computer vision models like DermaAI using YOLOv8, I thrive on building scalable, intelligent solutions that solve real-world problems.
            </p>
          </div>
          
          <div className="space-y-6 text-lg text-violet-800 dark:text-gray-300 leading-relaxed reveal-text bg-white/50 dark:bg-gray-900/50 p-8 rounded-3xl border border-violet-100 dark:border-gray-800 shadow-xl shadow-violet-100/50 dark:shadow-none backdrop-blur-sm transition-colors">
            <h3 className="text-2xl font-bold text-violet-900 dark:text-white flex items-center gap-3">
              <FaYoutube className="text-red-500" /> Digital Creator
            </h3>
            <p>
              Beyond traditional software engineering, I am deeply ingrained in the digital media ecosystem. I am the founder and manager of the "Cricketz Family and Abhishek Sharma" YouTube channel network. 
            </p>
            <p>
              This venture has given me hands-on expertise in end-to-end content creation, advanced SEO optimization, algorithmic audience growth, and navigating the legal complexities of digital media monetization and copyright compliance.
            </p>
          </div>
        </div>

        <div className="reveal-text mb-24 timeline-container">
          <h3 className="text-3xl font-bold text-violet-900 dark:text-white mb-12 text-center transition-colors">Experience & Training</h3>
          
          <div className="relative border-l-2 border-violet-200 dark:border-gray-800 ml-4 md:ml-8 space-y-12 transition-colors">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative pl-10 md:pl-16">
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-white dark:bg-gray-900 border-4 border-violet-300 dark:border-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-200 dark:shadow-none z-10 transition-colors">
                  {exp.icon}
                </div>
                
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-violet-50 dark:border-gray-800 shadow-lg shadow-violet-100/40 dark:shadow-none hover:shadow-xl hover:shadow-violet-200 dark:hover:shadow-gray-900/50 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h4 className="text-2xl font-bold text-violet-900 dark:text-white">{exp.role}</h4>
                      <p className="text-lg font-medium text-violet-600 dark:text-violet-400">{exp.company} <span className="text-violet-400 dark:text-gray-500 text-sm">| {exp.location}</span></p>
                    </div>
                    <span className="inline-block bg-violet-100 dark:bg-gray-800 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap w-fit">
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

        <div className="reveal-text text-center mb-10">
          <h3 className="text-3xl font-bold text-violet-900 dark:text-white mb-12 transition-colors">Core Technologies</h3>
          <div className="skills-grid flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-icon flex flex-col items-center gap-3 group">
                <div className={`text-5xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-violet-50 dark:border-gray-800 group-hover:scale-110 transition-all duration-300 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="font-semibold text-violet-700 dark:text-gray-300 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}