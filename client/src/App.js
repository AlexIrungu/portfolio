import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
// import Skills from './components/Skills';
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer'



function App() {
  return (
 
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
 
  );
}

export default App;
