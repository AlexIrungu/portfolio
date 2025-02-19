import React, { useState, useEffect } from "react";
import { PopupWidget } from 'react-calendly';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import profile from '../assets/profilepic1.jpeg';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');

  const profileImage = profile;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'summary', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  const technologies = [
    'HTML', 'CSS', 'Java', 'React', 'Ruby', 'Python', 'R', 'Web APIs',
    'SQL', 'SQLite', 'Microsoft 365', 'SharePoint', 'Power BI', 'Git'
  ];

  return (
    <div id="/" className="min-h-screen bg-vanilla text-cal-poly">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-3 inline-block px-4 py-1 bg-moss rounded-full backdrop-blur"
            >
              <span className="text-snow font-semibold">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-cal-poly">
                Alex Irungu
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-moss"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Software Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-cal-poly leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              With a proven track record in developing product websites, hybrid mobile applications, 
              and robust backend systems, I bring a wealth of experience to the realm of software development. 
              My journey spans from large-scale corporations to dynamic startups, enabling me to deliver 
              impactful solutions across diverse organizational stages.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link to='projects' smooth={true} duration={800}>
                <button className="px-8 py-3 bg-cal-poly text-snow hover:bg-moss rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cal-poly w-full sm:w-auto">
                  View My Work
                </button>
              </Link>
              
              <Link to='contact' smooth={true} duration={800}>
                <button className="px-8 py-3 bg-transparent border-2 border-cal-poly hover:bg-moss rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-cal-poly hover:text-snow w-full sm:w-auto">
                  Contact Me
                </button>
              </Link>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <a 
                href="https://github.com/AlexIrungu" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-cal-poly text-snow hover:bg-moss rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/alexirungu" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-cal-poly text-snow hover:bg-moss rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              {/* <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-cal-poly text-snow hover:bg-moss rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a> */}
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
  className="lg:w-1/2 flex justify-center relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="relative w-full max-w-md">
    {/* Decorative background elements */}
    <div className="absolute -top-8 -left-8 w-72 h-72 bg-moss/30 rounded-full blur-3xl z-0"></div>
    <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-cal-poly/25 rounded-full blur-3xl z-0"></div>
    
    {/* Main image container with improved styling */}
    <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-moss/40 shadow-2xl shadow-cal-poly/30 
                    transition-all duration-500 hover:shadow-moss/40 hover:scale-[1.03] 
                    before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-cal-poly/60 before:to-transparent/0">
      {/* Frame decoration - optional decorative elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-moss/50 to-cal-poly/50 rounded-2xl z-0 opacity-70"></div>
      
      {/* Image with improved hover effect */}
      <div className="relative z-1 rounded-xl overflow-hidden">
        <img 
          src={profileImage} 
          alt="Alex Irungu - Software Developer" 
          className="w-full h-full object-cover scale-105 transition-all duration-700 hover:scale-115 filter saturate-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cal-poly/80 via-transparent to-transparent opacity-90"></div>
      </div>
      
      {/* Optional bottom badge */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 
                     bg-moss/90 text-snow px-4 py-1.5 rounded-full backdrop-blur-sm
                     text-sm font-medium tracking-wide shadow-lg">
        Software Developer
      </div>
    </div>
  </div>
</motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-16 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <Link to="about" smooth={true} duration={800} className="animate-bounce cursor-pointer">
            <FaArrowDown className="text-cal-poly text-2xl" />
          </Link>
        </motion.div>
      </div>
      
       {/* About Section */}
       <section id="about" className="container mx-auto px-4 py-16">
        <motion.div 
          className="bg-snow rounded-xl p-8 shadow-2xl border border-moss"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 border-b border-moss pb-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 text-md md:text-lg font-medium ${
                  activeTab === tab.id 
                    ? 'bg-moss text-snow shadow-inner'
                    : 'text-cal-poly hover:bg-vanilla'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="min-h-[300px]">
            {/* About Me Tab */}
            {activeTab === 'summary' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold mb-6 text-cal-poly">
                  About Me
                </h2>
                <p className="text-cal-poly leading-relaxed">
                  I'm a dynamic Mathematics and Computer Science graduate with proven expertise in full-stack development and software engineering. My journey has equipped me with the skills to develop client-focused solutions while effectively communicating complex technical concepts.
                </p>
                <p className="text-cal-poly leading-relaxed">
                  I excel at navigating diverse computational challenges and working effectively in cross-functional teams. My comprehensive skill set spans multiple programming languages and frameworks, allowing me to create efficient, user-centric solutions that make a real impact.
                </p>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-moss">Technical Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-vanilla text-cal-poly rounded-lg border border-moss hover:bg-moss hover:text-snow transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <h2 className="text-3xl font-bold mb-6 text-cal-poly">
                  Professional Experience
                </h2>
                
                <div className="relative pl-8 border-l-2 border-moss">
                  {/* Danil Scenic Tours */}
                  <div className="mb-12 relative">
                    {/* <div className="absolute -left-[25px] top-0 h-10 w-10 rounded-full bg-moss border-4 border-snow flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-snow"></div>
                    </div> */}
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-cal-poly">Frontend Developer</h3>
                      <div className="text-moss font-semibold">Danil Scenic Tours</div>
                      <div className="text-cal-poly/70 text-sm">Jan 2024 - June 2024</div>
                    </div>
                    <ul className="text-cal-poly leading-relaxed list-disc ml-4">
                      <li>Developed and maintained the danilscenictours.co.ke website</li>
                      <li>Implemented effective SEO strategies to improve search rankings</li>
                      <li>Managed social media platforms for enhanced brand awareness</li>
                    </ul>
                  </div>

                  {/* BF SUMA Eagle Shop */}
                  <div className="mb-12 relative">
                    {/* <div className="absolute -left-[25px] top-0 h-10 w-10 rounded-full bg-moss border-4 border-snow flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-snow"></div>
                    </div> */}
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-cal-poly">Digital Marketing & IT Support</h3>
                      <div className="text-moss font-semibold">BF SUMA Eagle Shop</div>
                      <div className="text-cal-poly/70 text-sm">Nov 2023 - Jan 2024</div>
                    </div>
                    <ul className="text-cal-poly leading-relaxed list-disc ml-4">
                      <li>Developed comprehensive digital marketing strategies</li>
                      <li>Created marketing materials using Figma</li>
                      <li>Managed social media and paid advertising campaigns</li>
                    </ul>
                  </div>

                  {/* Ministry of Public Works */}
                  <div className="relative">
                    {/* <div className="absolute -left-[25px] top-0 h-10 w-10 rounded-full bg-moss border-4 border-snow flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-snow"></div>
                    </div> */}
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-cal-poly">IT Intern</h3>
                      <div className="text-moss font-semibold">Ministry of Public Works</div>
                      <div className="text-cal-poly/70 text-sm">Sep 2023 - Nov 2023</div>
                    </div>
                    <ul className="text-cal-poly leading-relaxed list-disc ml-4">
                      <li>Provided network support and configuration</li>
                      <li>Implemented security measures including firewalls</li>
                      <li>Supported network-related projects and user technical support</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <h2 className="text-3xl font-bold mb-6 text-cal-poly">
                  Education
                </h2>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-cal-poly">Flatiron School | Moringa School</h3>
                      <div className="text-moss font-semibold">Full Stack Web Development</div>
                      <div className="text-cal-poly">Comprehensive training in modern web development technologies</div>
                    </div>
                    <div className="text-cal-poly/70 mt-2 md:mt-0 md:ml-8">Nov 2022 - Jun 2023</div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-cal-poly">Jomo Kenyatta University of Agriculture & Technology</h3>
                      <div className="text-moss font-semibold">BSc. Mathematics and Computer Science</div>
                      <div className="text-cal-poly">Strong foundation in mathematical principles and computer science concepts</div>
                    </div>
                    <div className="text-cal-poly/70 mt-2 md:mt-0 md:ml-8">Sep 2017 - Aug 2022</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Calendly Widget */}
      <PopupWidget
        url="https://calendly.com/aleaxmuiruri"
        rootElement={document.getElementById("root")}
        text="Schedule a Call"
        textColor="#F7F0F0"
        color="#254D32"
        className="animate-pulse"
      />
    </div>
  );
}

export default Home;