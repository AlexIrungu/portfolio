import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import alex from '../assets/profilepic1.jpeg'
import Skills from "./Skills";
import Interests from "./Interest";
import { PopupWidget } from 'react-calendly';



function Home() {
    
  return (
    <div className='bg-gray-100'>
      <div className="container mx-auto p-8">
      
        <div className="text-center ">
             {/* Add the image here */}
          <img src={alex} alt="Alex Irungu" className="rounded-full w-16 h-16 mr-4" />

          <div className="text-3xl font-bold mb-5">Software Developer - Alex Irungu</div>
          <p className="text-lg leading-relaxed mb-5">
            I am experienced in building product websites, hybrid mobile applications, and backend development. My previous experience of working in large product-based companies as well as emerging startups will surely help in product development for companies at various stages.
          </p>
        </div>

        <section className="bg-white p-8 mt-8 rounded-md">
          <h2 className="text-3xl font-bold mb-5">Education</h2>

          <div className="flex flex-col md:flex-row justify-between mb-5">
            <div className="flex-grow-1">
              <h3 className="text-xl font-bold mb-2">Moringa School</h3>
              <div className="text-sm font-semibold mb-3">Software Engineering</div>
              <div className="mb-2">Full Stack Software Engineer</div>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">November 2022 - May 2023</span></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-5">
            <div className="flex-grow-1">
              <h3 className="text-xl font-bold mb-2">Jomo Kenyatta University Of Agriculture and Technology</h3>
              <div className="text-sm font-semibold mb-3">Bachelor of Science</div>
              <div>Degree in Mathematics and Computer Science</div>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">September 2017 - August 2021</span></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-grow-1">
              <h3 className="text-xl font-bold mb-2">Pioneer High School</h3>
              <div className="text-sm font-semibold mb-3">KCSE Certificate</div>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">January 2013 - December 2016</span></div>
          </div>
        </section>
      </div>

      <div>
        <Skills />
        <Interests />
      </div>

      <div>
        <PopupWidget
        url="https://calendly.com/aleaxmuiruri"
        rootElement={document.getElementById("root")}
        text="Book Appointment"
        textColor="#ffffff"
        color="#333333"  // Charcoal Black
        />
      </div>

      <footer className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/_alexirungu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 flex items-center"
            >
              <FaTwitter className="text-xl mr-1" />
            </a>

            <a
              href="https://instagram.com/_alexirungu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 flex items-center"
            >
              <FaInstagram className="text-xl mr-1" />
            </a>

            <a
              href="https://linkedin.com/in/alexirungu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 flex items-center"
            >
              <FaLinkedin className="text-xl mr-1" />
            </a>

            <a
              href="https://github.com/AlexIrungu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 flex items-center"
            >
              <FaGithub className="text-xl mr-1" />
            </a>
          </div>
          <p>&copy; 2023 Alex Irungu</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
