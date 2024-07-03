import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import danil from '../assets/danilweb.png'
import stellar from '../assets/stellarweb.png'
import dada from '../assets/dadaweb.png'
import communicare from '../assets/communicareweb.png'

function Projects() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects">
      <section className="bg-gray-100 py-8" id="experience">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-5" data-aos="fade-up">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-right">
              <img src={danil} alt="Danil Senic Tours" className="w-full h-56 object-cover object-center"/>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Danil Senic Tours React App</h3>
                <div className="mb-2 text-sm font-semibold">React Project</div>
                <p className="mb-4 text-gray-700">
                  Introducing "Danil Senic Tours," an immersive React web application...
                </p>
                <a href="https://danilscenictours.co.ke/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noreferrer">See Project Here</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-left">
              <img src={stellar} alt="Stellar Space" className="w-full h-56 object-cover object-center"/>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Stellar Space</h3>
                <div className="mb-2 text-sm font-semibold">React Project using Public API</div>
                <p className="mb-4 text-gray-700">
                  The "Stellar Space" React app is an exciting and educational application...
                </p>
                <a href="https://stellar-space1-tugi-ngunjiri.vercel.app/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noreferrer">See Project Here</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-right">
              <img src={dada} alt="DADA GOLF: FEMALE HEALTH AWARENESS CAMPAIGN" className="w-full h-56 object-cover object-center"/>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">DADA GOLF: FEMALE HEALTH AWARENESS CAMPAIGN</h3>
                <div className="mb-2 text-sm font-semibold">React Project</div>
                <p className="mb-4 text-gray-700">
                  Dada Women Wellness Initiative is a campaign that raises awareness...
                </p>
                <a href="https://dada-golf-elxyvm21o-alexirungu-moringaschoo.vercel.app/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noreferrer">See Project Here</a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-left">
              <img src={communicare} alt="CommuniCare App: Bridging the Gap with Health and Information" className="w-full h-56 object-cover object-center"/>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">CommuniCare App: Bridging the Gap with Health and Information</h3>
                <div className="mb-2 text-sm font-semibold">React/Ruby Project</div>
                <p className="mb-4 text-gray-700">
                  The "CommuniCare App" is a transformative full-stack project designed to empower communities...
                </p>
                <a href="https://communicare-revl.vercel.app/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noreferrer">See Project Here</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;