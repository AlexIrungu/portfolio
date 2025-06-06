import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import profile from '../assets/profilepic1.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Make navbar visible when scrolling up or at the top of the page
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`bg-vanilla text-cal-poly shadow-lg fixed w-full z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <img 
              src={profile}
              alt="Portfolio Logo"
              className="h-8 w-8 rounded-full bg-gradient-to-r from-cal-poly to-moss p-1"
            />
            <span className="text-xl font-bold bg-cal-poly bg-clip-text text-transparent">
              Alex Irungu
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link text-cal-poly hover:text-moss transition-colors duration-300 py-2 relative cursor-pointer group"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-moss transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link text-cal-poly hover:text-moss transition-colors duration-300 py-2 relative cursor-pointer group"
            >
              <span>Skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-moss transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link text-cal-poly hover:text-moss transition-colors duration-300 py-2 relative cursor-pointer group"
            >
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-moss transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 py-2 rounded-lg bg-cal-poly text-snow hover:bg-moss transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-moss hover:text-snow transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-vanilla absolute w-full left-0 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 rounded-lg text-base font-medium text-cal-poly hover:bg-moss hover:text-snow transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 rounded-lg text-base font-medium text-cal-poly hover:bg-moss hover:text-snow transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 rounded-lg text-base font-medium text-cal-poly hover:bg-moss hover:text-snow transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 rounded-lg text-base font-medium bg-cal-poly text-snow hover:bg-moss transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;