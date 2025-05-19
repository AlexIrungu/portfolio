import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Assuming you're using react-scroll for navigation

function Footer() {
    const socialLinks = [
        {
            icon: FaGithub,
            url: "https://github.com/AlexIrungu",
            label: "GitHub Profile",
            hoverColor: "hover:text-vanilla group-hover:rotate-12"
        },
        {
            icon: FaLinkedin,
            url: "https://linkedin.com/in/alexirungu/",
            label: "LinkedIn Profile",
            hoverColor: "hover:text-snow group-hover:-rotate-12"
        },
        {
            icon: FaTwitter,
            url: "https://twitter.com/_alexirungu",
            label: "Twitter Profile",
            hoverColor: "hover:text-moss group-hover:rotate-12"
        },
        {
            icon: FaInstagram,
            url: "https://instagram.com/_alexirungu",
            label: "Instagram Profile", 
            hoverColor: "hover:text-vanilla group-hover:-rotate-12"
        }
    ];

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-cal-poly to-cal-poly/95 text-snow py-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-moss via-vanilla to-snow opacity-40"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-moss/10 blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-vanilla/10 blur-xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Upper section with logo/name and navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
                    {/* Brand section */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-snow via-vanilla to-moss bg-clip-text text-transparent">
                            Alex Irungu
                        </h3>
                        <p className="text-moss/90 font-light">
                            Software Developer | Web Designer
                        </p>
                        <p className="text-snow/70 text-sm max-w-xs pt-2">
                            Crafting meaningful digital experiences through clean code and thoughtful design.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="md:text-center">
                        <h4 className="font-medium text-vanilla mb-4 text-lg">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.to}
                                    to={link.to} 
                                    spy={true} 
                                    smooth={true} 
                                    duration={800} 
                                    className="text-snow/80 hover:text-moss transition-all duration-300 cursor-pointer w-fit md:mx-auto"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact info */}
                    <div className="md:text-right">
                        <h4 className="font-medium text-vanilla mb-4 text-lg">Connect</h4>
                        <div className="flex flex-col space-y-2">
                            <a 
                                href="mailto:contact@alexirungu.com" 
                                className="text-snow/80 hover:text-moss transition-all duration-300 w-fit md:ml-auto"
                            >
                                aleaxmuiruri@gmail.com
                            </a>
                            <a 
                                href="tel:+123456789" 
                                className="text-snow/80 hover:text-moss transition-all duration-300 w-fit md:ml-auto"
                            >
                                +254 719 571 601 
                            </a>
                            <p className="text-snow/80 w-fit md:ml-auto">
                                Nairobi, Kenya
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-snow/20 to-transparent my-8"></div>
                
                {/* Bottom section with social links and copyright */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-snow/60 text-sm">
                        &copy; {new Date().getFullYear()} Alex Irungu. All rights reserved.
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-5">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group relative p-2 bg-cal-poly/80 hover:bg-cal-poly/30 rounded-lg transition-all duration-300 hover:scale-110"
                            >
                                <social.icon className={`text-xl ${social.hoverColor} transition-all duration-300`} />
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-moss scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;