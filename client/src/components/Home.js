import React from "react";

import alex from '../assets/profilepic1.jpeg';
// import Skills from "./Skills";
// import Interests from "./Interest";
// import Projects from "./Projects";
import { PopupWidget } from 'react-calendly';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="/" className='bg-gray-100 animate-fadeIn'>
      <div className="container mx-auto p-8">
        <div className="text-center">
          <img src={alex} alt="Alex Irungu" className="rounded-full w-32 h-32 mr-4 mx-auto border-4 border-gray-300 shadow-lg animate-scaleUp" />
          <div className="text-4xl font-bold mb-5 mt-3">Software Developer - Alex Irungu</div>
          <p className="text-lg leading-relaxed mb-5 mx-2">
          With a proven track record in developing product websites, hybrid mobile applications, and robust backend systems, I bring a wealth of experience to the realm of software development. My professional journey encompasses substantial contributions to both large-scale product-based corporations and dynamic startups, providing me with a comprehensive understanding of the intricacies involved in product development across diverse organizational stages. I am poised to leverage this seasoned expertise to deliver impactful solutions and drive success for companies operating at various developmental phases.
          </p>
        </div>

        <section className="bg-white p-8 mt-8 rounded-md shadow">
          <h2 className="text-3xl font-bold mb-5">Education</h2>
          {/* Education details unchanged for brevity */}
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

      {/* <div className="mt-8">
        <Projects />
        <Skills />
        <Interests />
      </div> */}

      <div>
        <PopupWidget
          url="https://calendly.com/aleaxmuiruri"
          rootElement={document.getElementById("root")}
          text="Book Appointment"
          textColor="#ffffff"
          color="#333333" // Charcoal Black
          className="animate-bounce"
        />
      </div>

     
    </div>
  );
}

export default Home;