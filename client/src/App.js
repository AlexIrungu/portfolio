import React from 'react';
import './App.css';
import { init } from '@emailjs/browser'; // Add this import
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Initialize EmailJS with your public key
init("0g4-XhSrtkVk_WbKh"); // Replace with your actual public key

function App() {
  return (
    <div className="App bg-snow text-cal-poly">
      <Navbar />
      <section id="home" className="min-h-screen pt-16">
        <Home />
      </section>
      <section id="projects" className="min-h-screen pt-16">
        <Projects />
      </section>
      <section id="skills" className="min-h-screen pt-16">
        <Skills />
      </section>
      <section id="contact" className="min-h-screen pt-16">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;