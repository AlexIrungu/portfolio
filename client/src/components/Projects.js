import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import luna from '../assets/luna.png';
import danil from '../assets/danilweb.png';
import stellar from '../assets/stellarweb.png';
import dada from '../assets/dadaweb.png';
import communicare from '../assets/communicareweb.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      image: luna,
      title: "Luna Crystals",
      type: "FullStack Project",
      category: ["fullstack", "ecommerce"],
      description: "Luna Crystals is a full-stack e-commerce application that allows users to purchase crystals...",
      link: "https://alexirungu.github.io/krystalz/",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      image: danil,
      title: "Danil Senic Tours React App",
      type: "React Project",
      category: ["frontend", "tourism"],
      description: "Introducing Danil Senic Tours, an immersive React web application...",
      link: "https://danilscenictours.co.ke/",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      image: stellar,
      title: "Stellar Space",
      type: "React Project using Public API",
      category: ["frontend", "api"],
      description: "The Stellar Space React app is an exciting and educational application...",
      link: "https://alexirungu.github.io/stellar-space/",
      technologies: ["React", "REST API", "CSS Animations", "Responsive UI"]
    },
    {
      image: dada,
      title: "DADA GOLF: FEMALE HEALTH AWARENESS CAMPAIGN",
      type: "React Project",
      category: ["frontend", "nonprofit"],
      description: "Dada Women Wellness Initiative is a campaign that raises awareness...",
      link: "https://dada-golf-29t9-5uoygtpor-alexirungumoringaschoos-projects.vercel.app/",
      technologies: ["React", "JavaScript", "CSS", "Accessibility"]
    },
    {
      image: communicare,
      title: "CommuniCare App",
      type: "React/Ruby Project",
      category: ["fullstack", "social"],
      description: "The CommuniCare App is a transformative full-stack project designed to empower communities...",
      link: "https://communicare-revl.vercel.app/",
      technologies: ["React", "Ruby on Rails", "PostgreSQL", "RESTful API"]
    }
  ];
    // ... other projects
  

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'api', name: 'API Projects' },
    { id: 'nonprofit', name: 'Non-Profit' },
    { id: 'social', name: 'Social Impact' },
    { id: 'tourism', name: 'Tourism' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <div className="min-h-screen bg-snow py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cal-poly mb-4">
            Featured Projects
          </h2>
          <p className="text-moss text-lg max-w-2xl mx-auto">
            Explore my latest work across web development and design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
                ${activeFilter === category.id 
                  ? 'bg-cal-poly text-snow shadow-lg scale-105' 
                  : 'bg-vanilla text-cal-poly hover:bg-moss hover:text-snow'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-moss text-snow text-sm rounded-full">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-cal-poly mb-2">
                  {project.title}
                </h3>

                <p className="text-moss mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-vanilla text-cal-poly text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-cal-poly text-snow rounded-lg font-medium transition-all duration-300 hover:bg-moss"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;