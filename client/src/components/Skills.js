import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCodepen, FaNetworkWired, FaDatabase, FaWind, FaPython, FaBook, FaCog, FaHashtag, FaHtml5, FaCss3Alt, FaNpm, FaGem, FaJsSquare, FaCube, FaTable } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const Checklist = ({ children }) => {
    return <ul className="list-none">{children}</ul>;
  };

  const ChecklistItem = ({ children }) => {
    return (
      <li className="flex items-start mb-2" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
        <span className="mr-2">
          <i className="fas fa-check text-green-500"></i>
        </span>
        {children}
      </li>
    );
  };

  const skills = [
    { icon: FaCodepen, title: 'React.js', description: 'Building complex, scalable web applications.' },
    { icon: FaNetworkWired, title: 'Node.js', description: 'Server-side applications with Node.js and Express.' },
    { icon: FaDatabase, title: 'Databases', description: 'Working with MongoDB, PostgreSQL, MySQL.' },
    { icon: FaWind, title: 'Tailwind CSS', description: 'Responsive UIs with Tailwind CSS.' },
    { icon: FaPython, title: 'Python', description: 'Data analysis, machine learning with Python.' },
    { icon: FaBook, title: 'Jupyter Notebook', description: 'Data analysis and visualization.' },
    { icon: FaCog, title: 'Pandas', description: 'Data manipulation with Pandas.' },
    { icon: FaHashtag, title: 'Matplotlib', description: 'Data visualization with Matplotlib.' },
    { icon: FaHtml5, title: 'HTML', description: 'Semantic and accessible HTML.' },
    { icon: FaCss3Alt, title: 'CSS', description: 'Styling with CSS.' },
    { icon: FaNpm, title: 'npm', description: 'Managing JavaScript packages.' },
    { icon: FaGem, title: 'Ruby', description: 'Web development with Ruby on Rails.' },
{ icon: FaJsSquare, title: 'JavaScript', description: 'Interactive web applications with vanilla JavaScript and frameworks.' },
{ icon: FaCube, title: 'NumPy', description: 'Numerical computing with Python.' },
{ icon: FaTable, title: 'Tableau', description: 'Data visualization and business intelligence with Tableau.' },
  ];

  return (
    <div id="skills">
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">My Skills</h2>
          <p className="text-gray-500 dark:text-gray-400" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Here are some of the technologies I'm proficient in:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-all hover:scale-105" data-aos="zoom-in" data-aos-delay={`${index * 100}`} data-aos-duration="1000">
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-8 h-8 text-blue-500" />
                <h3 className="text-lg font-semibold">{skill.title}</h3>
              </div>
              <Checklist>
                <ChecklistItem>{skill.description}</ChecklistItem>
              </Checklist>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Skills;