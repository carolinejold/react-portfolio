import React from "react";
import Intro from './pages/Intro.js'
import About from './pages/About.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

// https://www.react-reveal.com/examples/common/ for smooth transitions/animations
