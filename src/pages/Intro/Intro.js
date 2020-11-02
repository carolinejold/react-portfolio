import React from "react";
import { Link } from "react-scroll";

const styles = {
  component: {
    backgroundImage:
      'url("https://images.pexels.com/photos/403575/pexels-photo-403575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Playfair Display, serif",
    textAlign: "left",
  },
  padding: {
    padding: "15em 0em 0em 15%",
  },
  container: {
  },
  link: {
    fontSize: "1em",
    border: "solid 1px  rgb(37, 37, 36)",
    borderRadius: "10px",
    padding: "0.6em 1.4em 0.8em 1.4em",
    margin: "0em 0.2em 0em 0.2em",
    fontFamily: "Lato, sans-serif",
    background: "rgba(255, 255, 255, 0.2)",
  },
};

const Intro = () => {
  return (
    <div style={styles.component}>
      <div style={styles.padding}>
        <div style={styles.container}>
          <h1>Hi, I'm Caroline Old</h1>
          <br></br>
          <h3>
            Full-stack JavaScript developer with a passion <br></br>for
            front-end web development
          </h3>
          <br></br>
          <h3>Want to learn more?</h3>
          <br></br>
          <section style={{ display: "flex", flexDirection: "row" }}>
            <Link className="intro-link" to="about">
              <div style={styles.link}>About</div>
            </Link>
            <Link className="intro-link" to="projects">
              <div style={styles.link}>Projects</div>
            </Link>
            <Link className="intro-link" to="contact">
              <div style={styles.link}>Contact</div>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;
