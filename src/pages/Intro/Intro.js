import React from "react";
import { Link } from "react-scroll";

const styles = {
  container: {
    fontFamily: "PT Mono, monospace",
    height: "100vh",
    textAlign: "center",
  },
  link: {
    border: "solid 1px",
    borderRadius: '16px',
    padding: "1em",
    margin: "auto",
    maxWidth: "20em",
  },
};

const Intro = () => {
  return (
    <div style={styles.container}>
      <div>
        <h3>Hi, I'm</h3>
        <br></br>
        <h1 style={{ fontSize: "3em" }}>Caroline Old</h1>
        <br></br>
        <h3 style={{ margin: "auto", maxWidth: "14em" }}>
          Full-stack JavaScript developer with a passion for front-end web
          development
        </h3>
        <br></br>
        <p>Want to learn more?</p>
        <br></br>
        <br></br>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <Link to="about">
            <div style={styles.link}>About</div>
          </Link>
          <Link to="projects">
            <div style={styles.link}>Projects</div>
          </Link>
          <Link to="contact">
            <div style={styles.link}>Contact</div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Intro;
