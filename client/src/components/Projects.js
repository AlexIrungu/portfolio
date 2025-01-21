import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import danil from '../assets/danilweb.png'
import stellar from '../assets/stellarweb.png'
import dada from '../assets/dadaweb.png'
import communicare from '../assets/communicareweb.png'
import luna from '../assets/luna.png'

function Projects() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      image: luna,
      title: "Luna Crystals",
      type: "FullStack Project",
      description: "Luna Crystals is a full-stack e-commerce application that allows users to purchase crystals...",
      link: "https://alexirungu.github.io/krystalz/"

    },
    {
      image: danil,
      title: "Danil Senic Tours React App",
      type: "React Project",
      description: "Introducing Danil Senic Tours, an immersive React web application...",
      link: "https://danilscenictours.co.ke/"
    },
    {
      image: stellar,
      title: "Stellar Space",
      type: "React Project using Public API",
      description: "The Stellar Space React app is an exciting and educational application...",
      link: "https://stellar-space1-tugi-ngunjiri.vercel.app/"
    },
    {
      image: dada,
      title: "DADA GOLF: FEMALE HEALTH AWARENESS CAMPAIGN",
      type: "React Project",
      description: "Dada Women Wellness Initiative is a campaign that raises awareness...",
      link: "https://dada-golf-elxyvm21o-alexirungu-moringaschoo.vercel.app/"
    },
    {
      image: communicare,
      title: "CommuniCare App",
      type: "React/Ruby Project",
      description: "The CommuniCare App is a transformative full-stack project designed to empower communities...",
      link: "https://communicare-revl.vercel.app/"
    }
  ];

  return (
    <div id="projects" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          data-aos="fade-down"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-blue-400 text-sm font-semibold mb-3">{project.type}</div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg text-white font-semibold transition-transform duration-300 hover:scale-105"
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
}

export default Projects;