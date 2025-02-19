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
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;