import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
   const socialLinks = [
       {
           icon: FaTwitter,
           url: "https://twitter.com/_alexirungu",
           hoverColor: "hover:text-blue-400"
       },
       {
           icon: FaInstagram,
           url: "https://instagram.com/_alexirungu", 
           hoverColor: "hover:text-pink-500"
       },
       {
           icon: FaLinkedin,
           url: "https://linkedin.com/in/alexirungu/",
           hoverColor: "hover:text-blue-600"
       },
       {
           icon: FaGithub,
           url: "https://github.com/AlexIrungu",
           hoverColor: "hover:text-green-400"
       }
   ];

   return (
       <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-8">
           <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                   {/* Social Links */}
                   <div className="flex space-x-6">
                       {socialLinks.map((social, index) => (
                           <a
                               key={index}
                               href={social.url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className={`transform transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                           >
                               <social.icon className="text-2xl" />
                           </a>
                       ))}
                   </div>

                   {/* Copyright */}
                   <div className="text-center md:text-right">
                       <p className="text-gray-400">
                           &copy; {new Date().getFullYear()} Alex Irungu
                       </p>
                       <p className="text-sm text-gray-500 mt-1">
                           Built with React & Tailwind CSS
                       </p>
                   </div>
               </div>
           </div>
       </footer>
   );
}

export default Footer;