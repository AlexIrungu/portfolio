import React, { useState, useEffect } from "react";
// import { PopupWidget } from 'react-calendly';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import profile from '../assets/profilepic1.jpeg';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll listener for subtle parallax and navbar effects
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'summary', label: 'About Me', icon: 'user' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'education', label: 'Education', icon: 'graduation-cap' }
  ];

  const technologies = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Ruby', level: 70 },
    { name: 'R', level: 65 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'APIs', level: 80 },
    { name: 'Power BI', level: 75 },
    { name: 'SharePoint', level: 70 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vanilla/90 to-vanilla text-cal-poly overflow-hidden">
      {/* Floating Navigation - Appears on scroll */}
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-cal-poly/90 shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.span 
            className={`font-bold text-xl ${isScrolled ? 'text-snow' : 'text-cal-poly'}`}
            whileHover={{ scale: 1.05 }}
          >
            Alex Irungu
          </motion.span>
          
          <div className="flex items-center gap-6">
            <Link to="about" spy={true} smooth={true} duration={800} className={`cursor-pointer text-sm font-medium ${isScrolled ? 'text-snow hover:text-moss' : 'text-cal-poly hover:text-moss'}`}>
              About
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={800} className={`cursor-pointer text-sm font-medium ${isScrolled ? 'text-snow hover:text-moss' : 'text-cal-poly hover:text-moss'}`}>
              Projects
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={800}>
              <button className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-moss text-snow hover:bg-snow hover:text-cal-poly' 
                  : 'bg-cal-poly text-snow hover:bg-moss'
              }`}>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden" id="/">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-moss/10 rounded-bl-full z-0 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cal-poly/5 rounded-tr-full z-0 blur-3xl"></div>
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Text Content */}
            <motion.div 
              className="lg:w-1/2 mt-16 lg:mt-0 text-center lg:text-left z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <motion.div
                variants={itemVariants}
                className="mb-4 inline-block px-5 py-1.5 bg-moss rounded-full backdrop-blur shadow-md"
              >
                <span className="text-snow font-medium flex items-center gap-2">
                  <FaMapMarkerAlt className="text-xs" /> 
                  Nairobi, Kenya
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="text-cal-poly">
                  Alex Irungu
                </span>
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-3 text-2xl md:text-3xl font-bold mb-6 text-moss"
              >
                <FaCode className="text-xl" />
                <span>Software Developer</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-cal-poly/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Creating impactful solutions from concept to code. I specialize in developing 
                robust product websites, hybrid mobile applications, and sophisticated backend systems 
                across organizations from startups to enterprises.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex gap-5 flex-col sm:flex-row justify-center lg:justify-start"
              >
                <Link to='projects' smooth={true} duration={800}>
                  <button className="px-8 py-4 bg-cal-poly text-snow hover:bg-moss rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-moss/30 w-full sm:w-auto">
                    View My Work
                  </button>
                </Link>
                
                <Link to='contact' smooth={true} duration={800}>
                  <button className="px-8 py-4 bg-transparent border-2 border-cal-poly hover:border-moss hover:bg-moss rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-cal-poly hover:text-snow w-full sm:w-auto">
                    Contact Me
                  </button>
                </Link>
              </motion.div>
              
              {/* Social Icons */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-4 mt-10"
              >
                <a 
                  href="https://github.com/AlexIrungu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group p-3 bg-cal-poly text-snow hover:bg-moss rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://linkedin.com/in/alexirungu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group p-3 bg-cal-poly text-snow hover:bg-moss rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl group-hover:animate-pulse" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Profile Image */}
            <motion.div 
              className="lg:w-1/2 flex justify-center relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md">
                {/* Decorative elements */}
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-moss/30 rounded-full blur-3xl z-0"></div>
                <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-cal-poly/20 rounded-full blur-3xl z-0"></div>
                
                {/* Ring decoration */}
                <motion.div 
                  className="absolute inset-0 border-8 border-dashed border-moss/30 rounded-full z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {/* Main image container */}
                <div className="relative z-20 rounded-full overflow-hidden border-4 border-snow/90 shadow-2xl shadow-cal-poly/30 
                                w-64 h-64 md:w-80 md:h-80 mx-auto
                                transition-all duration-500 hover:shadow-moss/40 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-moss/10 to-cal-poly/10 z-0"></div>
                  
                  <img 
                    src={profile} 
                    alt="Alex Irungu - Software Developer" 
                    className="w-full h-full object-cover scale-105 transition-all duration-700 hover:scale-110 filter saturate-105"
                  />
                </div>
                
                {/* Experience badge */}
                <motion.div 
                  className="absolute bottom-0 right-10 z-30 bg-moss text-snow px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                >
                  <div className="text-xs font-semibold">Experience</div>
                  <div className="text-2xl font-bold">3+ Years</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="flex justify-center mt-16 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Link to="about" smooth={true} duration={800} className="cursor-pointer">
              <motion.div 
                className="p-3 bg-moss/20 hover:bg-moss/40 rounded-full transition-all duration-300"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowDown className="text-cal-poly text-xl" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* About Section */}
      <section id="about" className="py-24 relative">
        {/* Background design elements */}
        <div className="absolute left-0 top-1/4 w-1/3 h-96 bg-moss/10 rounded-r-full blur-3xl z-0"></div>
        <div className="absolute right-0 bottom-0 w-1/4 h-64 bg-cal-poly/10 rounded-l-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="px-4 py-1.5 bg-moss/20 rounded-full text-sm font-medium text-moss inline-block mb-3">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-cal-poly">
              Know Me Better
            </h2>
          </motion.div>
          
          <motion.div 
            className="bg-snow rounded-2xl p-8 md:p-12 shadow-xl border border-moss/20 backdrop-blur-sm relative z-10 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative corner element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-moss/10 rounded-full blur-lg"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cal-poly/10 rounded-full blur-lg"></div>
            
            {/* Tab navigation - Modern pill style */}
            <div className="bg-vanilla/50 rounded-xl p-2 flex flex-wrap gap-2 justify-center lg:justify-start mb-12 backdrop-blur-sm border border-moss/10 shadow-sm">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 text-md font-medium ${
                    activeTab === tab.id 
                      ? 'bg-moss text-snow shadow-md transform scale-105'
                      : 'text-cal-poly hover:bg-vanilla/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content with AnimatePresence for smooth transitions */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {/* About Me Tab */}
                {activeTab === 'summary' && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-bold text-cal-poly border-b-2 border-moss/30 pb-2 inline-block">
                      My Journey
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-cal-poly/90 leading-relaxed text-lg">
                          As a Mathematics and Computer Science graduate, I blend analytical thinking with creative problem-solving 
                          to develop elegant digital solutions. My journey in tech has been driven by a passion for creating 
                          user-centered experiences that make a difference.
                        </p>
                        <p className="text-cal-poly/90 leading-relaxed text-lg">
                          I excel at translating complex technical concepts into accessible solutions and thrive in 
                          collaborative environments where innovation is valued.
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-moss flex items-center gap-2">
                          <span className="w-6 h-1 bg-moss rounded-full"></span>
                          Professional Skills
                        </h4>
                        
                        <div className="space-y-4">
                          {technologies.slice(0, 6).map((tech, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between text-sm font-medium">
                                <span className="text-cal-poly">{tech.name}</span>
                                <span className="text-moss">{tech.level}%</span>
                              </div>
                              <div className="w-full h-2 bg-vanilla rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-moss"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${tech.level}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                ></motion.div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <h4 className="text-xl font-semibold text-moss flex items-center gap-2 mb-6">
                        <span className="w-6 h-1 bg-moss rounded-full"></span>
                        Technical Skills
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-4 py-2 bg-vanilla text-cal-poly rounded-lg border border-moss/30 hover:bg-moss hover:text-snow transition-all duration-300 cursor-default"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Experience Tab */}
                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                  >
                    <h3 className="text-3xl font-bold text-cal-poly border-b-2 border-moss/30 pb-2 inline-block">
                      Professional Experience
                    </h3>
                    
                    <div className="relative pl-8 border-l-4 border-moss/30">
                      {/* Timeline dot decorations */}
                      <div className="absolute -left-[10px] top-0 h-5 w-5 rounded-full bg-moss border-4 border-snow"></div>
                      <div className="absolute -left-[10px] top-1/3 h-5 w-5 rounded-full bg-moss border-4 border-snow"></div>
                      <div className="absolute -left-[10px] top-2/3 h-5 w-5 rounded-full bg-moss border-4 border-snow"></div>
                      
                      {/* Danil Scenic Tours */}
                      <motion.div 
                        className="mb-16 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="mb-4">
                          <div className="inline-block px-3 py-1 bg-moss/20 text-moss text-sm font-medium rounded-full mb-2">
                            Jan 2024 - Jun 2024
                          </div>
                          <h3 className="text-2xl font-bold text-cal-poly">Frontend Developer</h3>
                          <div className="text-moss font-semibold text-lg">Danil Scenic Tours</div>
                        </div>
                        <ul className="text-cal-poly/80 leading-relaxed space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Developed and maintained the danilscenictours.co.ke website with modern React components and responsive design</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Implemented effective SEO strategies resulting in 40% improvement in search rankings and organic traffic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Managed social media platforms and content strategy for enhanced brand awareness and customer engagement</span>
                          </li>
                        </ul>
                      </motion.div>

                      {/* BF SUMA Eagle Shop */}
                      <motion.div 
                        className="mb-16 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="mb-4">
                          <div className="inline-block px-3 py-1 bg-moss/20 text-moss text-sm font-medium rounded-full mb-2">
                            Nov 2023 - Jan 2024
                          </div>
                          <h3 className="text-2xl font-bold text-cal-poly">Digital Marketing & IT Support</h3>
                          <div className="text-moss font-semibold text-lg">BF SUMA Eagle Shop</div>
                        </div>
                        <ul className="text-cal-poly/80 leading-relaxed space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Developed comprehensive digital marketing strategies that increased online sales by 25%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Created high-converting marketing materials using Figma, enhancing brand consistency across platforms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Managed social media and paid advertising campaigns with measurable ROI and performance tracking</span>
                          </li>
                        </ul>
                      </motion.div>

                      {/* Ministry of Public Works */}
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="mb-4">
                          <div className="inline-block px-3 py-1 bg-moss/20 text-moss text-sm font-medium rounded-full mb-2">
                            Sep 2023 - Nov 2023
                          </div>
                          <h3 className="text-2xl font-bold text-cal-poly">IT Intern</h3>
                          <div className="text-moss font-semibold text-lg">Ministry of Public Works</div>
                        </div>
                        <ul className="text-cal-poly/80 leading-relaxed space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Provided network support and configuration for departmental systems serving over 200 employees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Implemented security measures including firewalls and access control systems to secure government data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-moss mt-1">•</span>
                            <span>Supported major network upgrade project and provided technical support for department staff</span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* Education Tab */}
                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                  >
                    <h3 className="text-3xl font-bold text-cal-poly border-b-2 border-moss/30 pb-2 inline-block">
                      Education Journey
                    </h3>
                    
                    <div className="space-y-16">
                      <motion.div 
                        className="bg-vanilla/30 rounded-xl p-6 border border-moss/20 shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-moss/10 rounded-bl-full"></div>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                          <div className="flex-grow relative z-10">
                            <div className="inline-block px-3 py-1 bg-moss/20 text-moss text-sm font-medium rounded-full mb-2">
                              Sep 2017 - Aug 2022
                            </div>
                            <h3 className="text-2xl font-bold text-cal-poly">Jomo Kenyatta University of Agriculture & Technology</h3>
                            <div className="text-moss font-semibold text-lg mb-3">BSc. Mathematics and Computer Science</div>
                            <div className="text-cal-poly/80 space-y-2">
                              <p>Comprehensive education in mathematical and computational principles:</p>
                              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Algorithm Design</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Data Structures</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Statistical Analysis</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Software Engineering</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div className="md:self-center">
                            <div className="w-24 h-24 bg-cal-poly/10 rounded-full flex items-center justify-center">
                              <span className="text-cal-poly font-bold text-lg">First Class<br/>Honors</span>
                            </div>
                          </div> */}
                          <div className="flex-grow relative z-10">
                            <div className="inline-block px-3 py-1 bg-moss/20 text-moss text-sm font-medium rounded-full mb-2">
                              Nov 2022 - Jun 2023
                            </div>
                            <h3 className="text-2xl font-bold text-cal-poly">Flatiron School | Moringa School</h3>
                            <div className="text-moss font-semibold text-lg mb-3">Full Stack Web Development</div>
                            <div className="text-cal-poly/80 space-y-2">
                              <p>Intensive full-stack development program covering:</p>
                              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>JavaScript & React</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Ruby on Rails</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>HTML5 & CSS3</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>API Development</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div className="md:self-center">
                            <div className="w-24 h-24 bg-cal-poly/10 rounded-full flex items-center justify-center">
                              <span className="text-cal-poly font-bold text-4xl">A+</span>
                            </div>
                          </div> */}
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-vanilla/30 rounded-xl p-6 border border-moss/20 shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-moss/10 rounded-bl-full"></div>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                          <div className="flex-grow relative z-10">
                            <div className="inline-block px-3 py-1 bg-moss/20 text-moss text-sm font-medium rounded-full mb-2">
                              Jan 2013 - Nov 2016
                            </div>
                            <h3 className="text-2xl font-bold text-cal-poly">Pioneer High School</h3>
                            <div className="text-moss font-semibold text-lg mb-3">Kenya Certificate of Secondary Education</div>
                            <div className="text-cal-poly/80 space-y-2">
                              <p>Strong foundation in mathematics and sciences:</p>
                              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Advanced Mathematics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Computer Studies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Physics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-moss rounded-full"></span>
                                  <span>Chemistry</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div className="md:self-center">
                            <div className="w-24 h-24 bg-cal-poly/10 rounded-full flex items-center justify-center">
                              <span className="text-cal-poly font-bold text-lg">A Grade</span>
                            </div>
                          </div> */}
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {/* <h4 className="text-xl font-semibold text-moss flex items-center gap-2">
                          <span className="w-6 h-1 bg-moss rounded-full"></span>
                          Additional Certifications
                        </h4> */}
                        
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-4 border border-moss/20 rounded-lg bg-vanilla/20 hover:bg-vanilla/40 transition-all duration-300">
                            <div className="text-lg font-bold text-cal-poly">AWS Cloud Practitioner</div>
                            <div className="text-moss">Amazon Web Services, 2023</div>
                          </div>
                          <div className="p-4 border border-moss/20 rounded-lg bg-vanilla/20 hover:bg-vanilla/40 transition-all duration-300">
                            <div className="text-lg font-bold text-cal-poly">Google Analytics Certification</div>
                            <div className="text-moss">Google, 2022</div>
                          </div>
                          <div className="p-4 border border-moss/20 rounded-lg bg-vanilla/20 hover:bg-vanilla/40 transition-all duration-300">
                            <div className="text-lg font-bold text-cal-poly">React Developer Certification</div>
                            <div className="text-moss">Meta, 2023</div>
                          </div>
                          <div className="p-4 border border-moss/20 rounded-lg bg-vanilla/20 hover:bg-vanilla/40 transition-all duration-300">
                            <div className="text-lg font-bold text-cal-poly">Data Analytics Professional</div>
                            <div className="text-moss">Microsoft, 2023</div>
                          </div>
                        </div> */}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
                   
      
    </div>
  );
}

export default Home;