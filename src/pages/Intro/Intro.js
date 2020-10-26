import React from "react";
import { Link } from "react-scroll";

const styles = {
  container: {
    fontFamily: "PT Mono, monospace",
    backgroundColor: "black",
    backgroundImage:
      'url("https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    backgroundPosition: "center",
    backgroundSize: "100em",
    color: "white",
    height: "100vh",
    textAlign: "center",
  },
  cover: {
    background: "black",
    opacity: "0.7",
    height: "90vh",
    paddingTop: "5.1em",
  },
  link: {
    border: "solid 1px",
    padding: "1em",
    background: "black",
    margin:'auto',
    maxWidth: '20em'
  },
};

const Intro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cover}>
        <h3>Hi, I'm</h3>
        <br></br>
        <h1 className='name'>
          CAROLINE OLD
        </h1>
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
