import React from "react";
import Intro from "./pages/Intro/Intro.js";
import About from "./pages/About/About.js";
import TechSkills from "./pages/About/TechSkills";
import Timeline from "./pages/About/Timeline";
import Projects from "./pages/Projects/Projects.js";
import Contact from "./pages/Contact/Contact.js";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <TechSkills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

// https://www.react-reveal.com/examples/common/ for smooth transitions/animations
