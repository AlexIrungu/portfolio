import React, { useState, useEffect } from "react";
import { 
  FaCodepen, FaNetworkWired, FaDatabase, 
  FaPython, FaBook, FaCog 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false
    });
  }, []);

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const colors = {
    'cal-poly': '#254D32',
    'moss': '#8A9B68',
    'vanilla': '#DBD8AE',
    'snow': '#F7F0F0',
  };

  // Condensed core skill areas
  const coreSkills = [
    {
      icon: FaCodepen,
      title: 'Frontend Development',
      description: 'Building responsive web applications with React.js, JavaScript, and modern CSS frameworks',
      expertise: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
      level: 90
    },
    {
      icon: FaNetworkWired,
      title: 'Backend Development',
      description: 'Creating scalable server-side applications and RESTful APIs',
      expertise: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      level: 85
    },
    {
      icon: FaPython,
      title: 'Data Science',
      description: 'Analyzing and visualizing data using Python and related technologies',
      expertise: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      level: 88
    },
    {
      icon: FaCog,
      title: 'DevOps & Tools',
      description: 'Implementing CI/CD pipelines and maintaining development workflows',
      expertise: ['Git', 'Docker', 'AWS', 'Testing'],
      level: 82
    }
  ];

  return (
    <div id="skills" className="py-16" style={{ background: `linear-gradient(to bottom, ${colors['moss']} 0%, ${colors['cal-poly']} 100%)` }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-down"
          >
            <span style={{ 
              background: `linear-gradient(to right, ${colors['cal-poly']}, ${colors['vanilla']})`, 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Core Competencies
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coreSkills.map((skill, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${index * 50}`}
              onMouseEnter={() => setHoveredSkill(skill.title)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                backgroundColor: colors['vanilla'],
                transform: hoveredSkill === skill.title ? 'scale(1.02)' : 'scale(1)',
                boxShadow: hoveredSkill === skill.title 
                  ? `0 10px 15px -3px ${colors['cal-poly']}40` 
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg" style={{
                  background: `linear-gradient(to right, ${colors['cal-poly']}, ${colors['moss']})`
                }}>
                  <skill.icon className="w-6 h-6" style={{ color: colors['snow'] }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: colors['cal-poly'] }}>
                  {skill.title}
                </h3>
              </div>
              
              <p className="mb-4" style={{ color: '#555' }}>
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.expertise.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      backgroundColor: `${colors['cal-poly']}15`,
                      color: colors['cal-poly']
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="w-full rounded-full h-2.5" style={{ backgroundColor: `${colors['cal-poly']}20` }}>
                <div 
                  className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: hoveredSkill === skill.title ? `${skill.level}%` : '0%',
                    background: `linear-gradient(to right, ${colors['moss']}, ${colors['cal-poly']})`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;