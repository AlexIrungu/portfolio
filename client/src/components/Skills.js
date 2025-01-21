import React, { useEffect } from "react";
import { 
  FaCodepen, FaNetworkWired, FaDatabase, FaWind, FaPython, 
  FaBook, FaCog, FaHashtag, FaHtml5, FaCss3Alt, FaNpm, 
  FaGem, FaJsSquare, FaCube, FaTable 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    { icon: FaCodepen, title: 'React.js', description: 'Building complex, scalable web applications' },
    { icon: FaNetworkWired, title: 'Node.js', description: 'Server-side applications with Node.js and Express' },
    { icon: FaDatabase, title: 'Databases', description: 'Working with MongoDB, PostgreSQL, MySQL' },
    { icon: FaWind, title: 'Tailwind CSS', description: 'Responsive UIs with Tailwind CSS' },
    { icon: FaPython, title: 'Python', description: 'Data analysis, machine learning with Python' },
    { icon: FaBook, title: 'Jupyter Notebook', description: 'Data analysis and visualization' },
    { icon: FaCog, title: 'Pandas', description: 'Data manipulation with Pandas' },
    { icon: FaHashtag, title: 'Matplotlib', description: 'Data visualization with Matplotlib' },
    { icon: FaHtml5, title: 'HTML', description: 'Semantic and accessible HTML' },
    { icon: FaCss3Alt, title: 'CSS', description: 'Styling with CSS' },
    { icon: FaNpm, title: 'npm', description: 'Managing JavaScript packages' },
    { icon: FaGem, title: 'Ruby', description: 'Web development with Ruby on Rails' },
    { icon: FaJsSquare, title: 'JavaScript', description: 'Interactive web applications with vanilla JavaScript and frameworks' },
    { icon: FaCube, title: 'NumPy', description: 'Numerical computing with Python' },
    { icon: FaTable, title: 'Tableau', description: 'Data visualization and business intelligence' }
  ];

  return (
    <div id="skills" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-down"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A comprehensive toolkit of technologies I've mastered for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
              data-aos="zoom-in"
              data-aos-delay={`${index * 50}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div 
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['REST APIs', 'Git & GitHub', 'Agile Development', 'CI/CD', 'Testing', 'UI/UX Design'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;