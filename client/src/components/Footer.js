import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
   const socialLinks = [
       {
           icon: FaTwitter,
           url: "https://twitter.com/_alexirungu",
           hoverColor: "hover:text-moss"
       },
       {
           icon: FaInstagram,
           url: "https://instagram.com/_alexirungu", 
           hoverColor: "hover:text-vanilla"
       },
       {
           icon: FaLinkedin,
           url: "https://linkedin.com/in/alexirungu/",
           hoverColor: "hover:text-snow"
       },
       {
           icon: FaGithub,
           url: "https://github.com/AlexIrungu",
           hoverColor: "hover:text-moss"
       }
   ];

   return (
       <footer className="bg-gradient-to-b from-cal-poly to-cal-poly text-snow py-8">
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
                               <social.icon className="text-2xl text-vanilla" />
                           </a>
                       ))}
                   </div>

                   {/* Copyright */}
                   <div className="text-center md:text-right">
                       <p className="text-moss">
                           &copy; {new Date().getFullYear()} Alex Irungu
                       </p>
                       
                   </div>
               </div>
           </div>
       </footer>
   );
}

export default Footer;