import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import emailjs from '@emailjs/browser'; // Import EmailJS for notifications


// Import your project images
import luna from '../assets/luna.png';
import danil from '../assets/danilweb.png';
import stellar from '../assets/stellarweb.png';
import dada from '../assets/dadaweb.png';
import communicare from '../assets/communicareweb.png';
import savanna from '../assets/savannah.png';
import jambohouse from '../assets/jambohouse.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [authEmail, setAuthEmail] = useState('');
  const [authName, setAuthName] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projects = [
    {
      image: savanna,
      title: "Savanna Journeys",
      type: "Frontend Project",
      category: ["frontend", "tourism"],
      description: "A premium travel advisory website for Kenya, showcasing luxury safari experiences, destinations, and travel services for discerning travelers seeking authentic East African experiences.",
      liveLink: "https://alexirungu.github.io/kenya-travel-advisor/",
      githubLink: "https://github.com/AlexIrungu/kenya-travel-advisor",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP Animations", "Responsive Design"],
      shortTitle: "SJ" // Short title for background watermark
    },
    {
      image: jambohouse,
      title: "Jambo House Safaris",
      type: "React/Router Project",
      category: ["frontend", "tourism", "fullstack"],
      description: "A comprehensive travel platform for booking safari tours across East Africa, featuring multiple destinations in Kenya, Tanzania, and Rwanda with integrated booking forms and customer reviews.",
      liveLink: "https://jambohousesafaris.com/",
      githubLink: "https://github.com/AlexIrungu/jambohouse",
      technologies: ["React", "React Router", "Tailwind CSS", "API Integration", "Responsive UI"],
      shortTitle: "JHS"
    },
    {
      image: luna,
      title: "Luna Crystals",
      type: "FullStack Project",
      category: ["fullstack", "ecommerce"],
      description: "Luna Crystals is a full-stack e-commerce application that allows users to purchase crystals...",
      liveLink: "https://alexirungu.github.io/krystalz/",
      githubLink: "https://github.com/AlexIrungu/krystalz",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      shortTitle: "LC"
    },
    {
      image: danil,
      title: "Danil Scenic Tours",
      type: "React Project",
      category: ["frontend", "tourism"],
      description: "A modern tourism website featuring tour packages, booking system, and payment integration for a safari company.",
      liveLink: "https://danilscenictours.co.ke/",
      githubLink: "https://github.com/AlexIrungu/final-tours",
      technologies: ["React", "TailwindCSS", "Firebase", "Responsive Design"],
      shortTitle: "DST"
    },
    {
      image: stellar,
      title: "Stellar Space",
      type: "React Project using Public API",
      category: ["frontend", "api"],
      description: "The Stellar Space React app is an exciting and educational application...",
      liveLink: "https://alexirungu.github.io/stellar-space/",
      githubLink: "https://github.com/AlexIrungu/stellar-space",
      technologies: ["React", "REST API", "CSS Animations", "Responsive UI"],
      shortTitle: "SS"
    },
    {
      image: dada,
      title: "DADA GOLF",
      type: "Health Awareness Campaign",
      category: ["frontend", "nonprofit"],
      description: "Dada Women Wellness Initiative is a campaign that raises awareness...",
      liveLink: "https://dada-golf-29t9-5uoygtpor-alexirungumoringaschoos-projects.vercel.app/",
      githubLink: "https://github.com/AlexIrungu/dada-golf",
      technologies: ["React", "JavaScript", "CSS", "Accessibility"],
      shortTitle: "DG"
    },
    {
      image: communicare,
      title: "CommuniCare App",
      type: "React/Ruby Project",
      category: ["fullstack", "social"],
      description: "The CommuniCare App is a transformative full-stack project designed to empower communities...",
      liveLink: "https://communicare-revl.vercel.app/",
      githubLink: "https://github.com/AlexIrungu/Communicare",
      technologies: ["React", "Ruby on Rails", "PostgreSQL", "RESTful API"],
      shortTitle: "CA"
    }
  ];

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

  // Handle GitHub source code access request
  const handleSourceCodeRequest = (project) => {
    setCurrentProject(project);
    setShowAuthModal(true);
  };

  // Close the authentication modal
  const closeAuthModal = () => {
    setShowAuthModal(false);
    setAuthEmail('');
    setAuthName('');
    setAuthMessage('');
    setSubmitStatus(null);
  };

  // Submit the authentication request
  const submitAuthRequest = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      name: authName,
      email: authEmail,
      message: authMessage,
      project: currentProject.title,
      github_link: currentProject.githubLink
    };

    // Send email notification using EmailJS
    emailjs.send(
      'service_b2bid8p', // Replace with your EmailJS service ID
      'template_v8xc0rj', // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Redirect to GitHub after a short delay
      setTimeout(() => {
        window.open(currentProject.githubLink, '_blank');
        closeAuthModal();
      }, 2000);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
      setIsSubmitting(false);
    });
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Background design elements */}
      <div className="absolute right-0 top-0 w-1/3 h-64 bg-moss/10 rounded-l-full blur-3xl z-0"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-96 bg-cal-poly/10 rounded-r-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-4 py-1.5 bg-moss/20 rounded-full text-sm font-medium text-moss inline-block mb-3">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cal-poly">
            Recent Projects
          </h2>
        </motion.div>
        
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
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-snow rounded-xl overflow-hidden shadow-xl group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="h-56 bg-gradient-to-br from-cal-poly to-moss relative overflow-hidden">
                {/* Add this image tag */}
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-full object-cover opacity-70"
  />
                <div className="absolute inset-0 flex items-center justify-center text-snow text-6xl font-bold opacity-20">
                  {project.shortTitle}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-snow font-semibold text-lg">{project.title}</div>
                  <div className="text-snow/80 text-sm">{project.type}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-vanilla text-cal-poly rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-cal-poly/80 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-4 py-2 bg-cal-poly text-snow rounded-lg hover:bg-moss transition-all duration-300 text-sm font-medium"
                  >
                    View Live
                  </a>
                  <button 
                    onClick={() => handleSourceCodeRequest(project)}
                    className="text-cal-poly hover:text-moss transition-all duration-300 flex items-center gap-1 text-sm"
                  >
                    <FaGithub className="text-lg" />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
          
        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/AlexIrungu"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border-2 border-cal-poly hover:border-moss text-cal-poly hover:text-snow hover:bg-moss rounded-lg transition-all duration-300 flex items-center gap-2 font-medium"
          >
            <FaGithub className="text-xl" />
            See More Projects on GitHub
          </a>
        </div>
      </div>

      {/* Source Code Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-snow rounded-xl p-6 md:p-8 max-w-md w-full relative">
            <button 
              onClick={closeAuthModal}
              className="absolute top-4 right-4 text-cal-poly hover:text-moss"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-cal-poly mb-2">
              Request Source Code Access
            </h3>
            <p className="text-moss mb-6">
              Please provide your information to access the source code for {currentProject?.title}
            </p>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Access request submitted successfully! Redirecting to GitHub...</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p>There was an error processing your request. Please try again.</p>
              </div>
            ) : null}
            
            <form onSubmit={submitAuthRequest}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-cal-poly mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-moss/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cal-poly"
                  placeholder="Your name"
                  value={authName}
                  onChange={(e) => setAuthName(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-cal-poly mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-moss/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cal-poly"
                  placeholder="your.email@example.com"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-cal-poly mb-2">Purpose (Optional)</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-moss/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cal-poly"
                  placeholder="Why are you interested in this project's source code?"
                  rows="3"
                  value={authMessage}
                  onChange={(e) => setAuthMessage(e.target.value)}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cal-poly text-snow rounded-lg font-medium transition-all duration-300 hover:bg-moss flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-snow"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaGithub className="text-xl" />
                    Access Source Code
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;