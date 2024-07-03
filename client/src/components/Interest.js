import React from "react";
import { FaGamepad, FaRocket, FaLock } from "react-icons/fa"; // Import icons

function Interests() {
  return (
    <div id="interest" className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-5">Interests</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <FaGamepad className="mr-2 text-2xl" />
          <p>
            In addition to developing websites, I spend much of my time playing video games and keeping up with technological developments.
          </p>
        </div>
        <div className="flex items-center">
          <FaRocket className="mr-2 text-2xl" />
          <p>
            When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.
          </p>
        </div>
        <div className="flex items-center">
          <FaLock className="mr-2 text-2xl" />
          <p>
            Most of my time, though, is spent on doing research as I am very much into the field of cybersecurity. The data and information we consume every day keep on growing, hence there is an ever-ending need to enhance security, more importantly, cybersecurity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interests;