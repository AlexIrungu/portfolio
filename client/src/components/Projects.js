import React from "react";

function Projects() {
  return (
    <div>
      <section className="bg-gray-100 py-8" id="experience">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-5">Projects</h2>

          <div className="flex flex-col md:flex-row justify-between mb-5">
            <div className="flex-grow md:mr-5">
              <h3 className="mb-2 text-xl font-bold">CommuniCare App: Bridging the Gap with Health and Information</h3>
              <div className="mb-2 text-sm font-semibold">React/Ruby Project</div>
              <p className="mb-4 text-gray-700">
                The "CommuniCare App" is a transformative full-stack project designed to empower communities with vital information on communicable diseases, their impact, and proactive prevention measures. With a user-friendly interface, this app combines essential features for both users and administrators to create a unified platform for health awareness and disease prevention.
              </p>
              <a href="https://communicare-revl.vercel.app/" className="text-blue-500">See Project Here</a>
            </div>
            <div className="flex-shrink-0 text-primary"><span>April 2023 - May 2023</span></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-5">
            <div className="flex-grow md:mr-5">
              <h3 className="mb-2 text-xl font-bold">Stellar Space</h3>
              <div className="mb-2 text-sm font-semibold">React Project using Public API</div>
              <p className="mb-4 text-gray-700">
                The "Stellar Space" React app is an exciting and educational application designed to provide users with real-time access to captivating space-related information using NASA's APIs. This dynamic app seamlessly integrates various NASA data sources to offer a comprehensive and immersive experience for space enthusiasts and curious minds alike.
              </p>
              <a href="https://stellar-space1-tugi-ngunjiri.vercel.app/" className="text-blue-500">See Project Here</a>
            </div>
            <div className="flex-shrink-0 text-primary"><span>January 2023 - February 2023</span></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-5">
            <div className="flex-grow md:mr-5">
              <h3 className="mb-2 text-xl font-bold">Danil Senic Tours React App</h3>
              <div className="mb-2 text-sm font-semibold">React Project</div>
              <p className="mb-4 text-gray-700">
                Introducing "Danil Senic Tours," an immersive React web application that takes you on a captivating journey through the heart of Kenya's rich culture, breathtaking landscapes, and vibrant tourism offerings. Inspired by renowned tour sites and designed for travelers and adventurers alike, this app is your gateway to exploring the beauty and diversity of Kenya.
              </p>
              <a href="https://danilscenictours.co.ke/" className="text-blue-500">See Project Here</a>
            </div>
            <div className="flex-shrink-0 text-primary"><span>August 2023</span></div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Projects;
