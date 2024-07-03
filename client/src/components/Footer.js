import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Social icons unchanged for brevity */}
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
    );
  }

export default Footer