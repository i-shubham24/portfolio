import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, MapPin, GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const container = useRef(null);

  const personalInfo = [
    { icon: <Mail className="text-violet-600 dark:text-violet-400" size={20} />, label: "Email", value: "shubhamkaler24@gmail.com" },
    { icon: <Phone className="text-violet-600 dark:text-violet-400" size={20} />, label: "Phone", value: "+91 9815272708" },
    { icon: <MapPin className="text-violet-600 dark:text-violet-400" size={20} />, label: "Location", value: "Amritsar, Punjab" },
    { icon: <GraduationCap className="text-violet-600 dark:text-violet-400" size={20} />, label: "Education", value: "MCA (2024-2026)" },
    { icon: <Award className="text-violet-600 dark:text-violet-400" size={20} />, label: "CGPA", value: "8.00 / 10" },
  ];

  const technicalSkills = [
    { name: "React / Next.js", level: 90 },
    { name: "JavaScript / Node.js", level: 85 },
    { name: "Python / Machine Learning", level: 80 },
    { name: "Data Science & YOLOv8", level: 75 },
    { name: "HTML / CSS / Tailwind", level: 95 },
  ];

  const softSkills = [
    { name: "YouTube SEO & Management", level: 90 },
    { name: "Social Media Marketing", level: 85 },
    { name: "Content Strategy", level: 80 },
  ];

  useGSAP(() => {
    gsap.from('.info-card', { x: -50, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
    gsap.from('.skill-group', { x: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.2 });

    gsap.utils.toArray('.progress-fill').forEach((bar) => {
      const targetWidth = bar.getAttribute('data-width');
      gsap.to(bar, {
        width: `${targetWidth}%`,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
        }
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen pt-28 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-violet-900 dark:text-white mb-4 tracking-tight transition-colors">Profile & Skills</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 info-card h-fit bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-violet-100 dark:border-gray-800 shadow-xl shadow-violet-100/50 dark:shadow-none transition-colors">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-200 to-fuchsia-200 dark:from-violet-900 dark:to-fuchsia-900 rounded-full mb-6 p-1 shadow-inner">
              <div className="w-full h-full bg-white dark:bg-gray-950 rounded-full flex items-center justify-center text-4xl font-bold text-violet-500 dark:text-violet-400">
                SS
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-violet-900 dark:text-white mb-2">Shubhampreet Singh</h2>
            <p className="text-center text-violet-500 dark:text-violet-400 font-medium mb-8">Software & AI Developer</p>
            
            <div className="space-y-6">
              {personalInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-violet-50 dark:border-gray-800 pb-4 last:border-0">
                  <div className="p-3 bg-violet-50 dark:bg-gray-800 rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-violet-400 dark:text-gray-500 font-semibold uppercase tracking-wider">{info.label}</p>
                    <p className="text-violet-900 dark:text-gray-200 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            
            <div className="skill-group bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-violet-50 dark:border-gray-800 shadow-lg shadow-violet-100/30 dark:shadow-none transition-colors">
              <h3 className="text-2xl font-bold text-violet-900 dark:text-white mb-8 flex items-center gap-3">
                <CodeIcon /> Technical Arsenal
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-violet-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-violet-500 dark:text-violet-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-violet-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="progress-fill h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full w-0"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-group bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-violet-50 dark:border-gray-800 shadow-lg shadow-violet-100/30 dark:shadow-none transition-colors">
              <h3 className="text-2xl font-bold text-violet-900 dark:text-white mb-8 flex items-center gap-3">
                <TrendingUpIcon /> Digital Marketing & Strategy
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-violet-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-violet-500 dark:text-violet-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-violet-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="progress-fill h-full bg-gradient-to-r from-violet-500 to-fuchsia-400 rounded-full w-0"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function CodeIcon() {
  return (
    <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}