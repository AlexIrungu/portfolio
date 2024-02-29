import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
// import Skills from './components/Skills';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/Contact';



function App() {
  return (
 
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </div>
 
  );
}

export default App;
