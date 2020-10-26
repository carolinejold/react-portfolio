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
    color: "whitesmoke",
    height: "100vh",
    textAlign: "center",
  },
  cover: {
    background: 'black',
    opacity: '0.7',
    height: '90vh',
    paddingTop: '4em'
  }
};

const Intro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cover}>
        <h1 style={{fontSize: '6em'}}>CAROLINE OLD</h1>
        <br></br>
        <h3 style={{margin: 'auto', maxWidth: '14em'}}>
          Full-stack JavaScript developer with a passion for front-end web
          development
        </h3>
        <br></br>
        <p>Want to learn more?</p>
        <br></br>
        <Link to="about">About</Link>
        <br></br>
        <Link to="projects">Projects</Link>
        <br></br>
        <Link to="contact">Contact</Link>
        <br></br>
      </div>
    </div>
  );
};

export default Intro;
