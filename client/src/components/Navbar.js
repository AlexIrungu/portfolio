import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ setIsOpen, isOpen }) => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >Home</Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >Skills</Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >Projects</Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

      {/* Uncomment and update this part if you want to use React Scroll for the mobile menu as well */}
      {
      // isOpen && (
      //   <div className="flex flex-col md:hidden">
      //     <Link to="home" smooth={true} duration={500} className="hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
      //     <Link to="projects" smooth={true} duration={500} className="hover:text-gray-300 transition duration-300 ease-in-out">Projects</Link>
      //     <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 transition duration-300 ease-in-out">Contact</Link>
      //   </div>
      // )
      }
    </nav>
  );
};

export default Navbar;