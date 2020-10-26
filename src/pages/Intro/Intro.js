import React from "react";
import { Link } from "react-scroll";


const Intro = () => {
  return (
    <div className="intro">
      <h1>CAROLINE OLD</h1><br></br>
      <h3>
        Full-stack JavaScript developer with a passion for
        front-end web development
      </h3><br></br>
      <p>Want to learn more?</p><br></br>
      <Link to="about">About</Link><br></br>
      <Link to="projects">Projects</Link><br></br>
      <Link to="contact">Contact</Link><br></br>
    </div>
  );
};

export default Intro;
