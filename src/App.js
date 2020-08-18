import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App  = () => {
  return (
    <div className="app">
        <NavBar />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
