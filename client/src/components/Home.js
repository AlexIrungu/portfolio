import React from "react";
import { PopupWidget } from 'react-calendly';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div id="/" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white animate-fadeIn">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-3/4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Alex Irungu</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              With a proven track record in developing product websites, hybrid mobile applications, 
              and robust backend systems, I bring a wealth of experience to the realm of software development. 
              My journey spans from large-scale corporations to dynamic startups, enabling me to deliver 
              impactful solutions across diverse organizational stages.
            </p>
            <Link to='projects'>
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            </Link>
            
          </div>
        </div>

        {/* Education Section */}
        <section className="mt-20 bg-gray-800 rounded-xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Moringa School</h3>
                <div className="text-blue-400 font-semibold mb-2">Full Stack Software Engineering</div>
                <div className="text-gray-300">Comprehensive training in modern web development technologies</div>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">November 2022 - May 2023</div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Jomo Kenyatta University Of Agriculture and Technology</h3>
                <div className="text-blue-400 font-semibold mb-2">Bachelor of Science</div>
                <div className="text-gray-300">Mathematics and Computer Science</div>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">September 2017 - August 2021</div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Pioneer High School</h3>
                <div className="text-blue-400 font-semibold mb-2">KCSE Certificate</div>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">January 2013 - December 2016</div>
            </div>
          </div>
        </section>
      </div>

      <PopupWidget
        url="https://calendly.com/aleaxmuiruri"
        rootElement={document.getElementById("root")}
        text="Schedule a Call"
        textColor="#ffffff"
        color="#3B82F6" // Changed to match the blue theme
        className="animate-pulse"
      />
    </div>
  );
}

export default Home;