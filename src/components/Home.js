import React from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import me from "../images/me.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Fade>
      <img className="me" src={me} alt="my face" />
        <div>
          {/* <Pulse>
            <h1 className="home-title">Caroline Old</h1>
          </Pulse> */}
          <h2 className="home-description">
            Full-stack JavaScript developer.
            <br></br>
            Passionate about front-end web development.
          </h2>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
