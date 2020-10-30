import React from "react";
import Container from "@material-ui/core/Container";
import me from "./images/me.jpg";

const styles = {
  component: {
    minHeight: "100vh",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "1em",
    backgroundColor: "white",
    color: "black",
    borderRadius: "16px",
    padding: "1em",
  },
  image: {
    maxWidth: '20em',
    borderRadius: '16px'
  }
};

const About = () => {
  return (
    <section className="about">
      <h1 style={{ paddingTop: "1em" }}>About</h1>
      <Container
        className="about-container"
        style={styles.container}
        maxWidth="sm"
      >
        <section>
          <img src={me} alt="Me" style={styles.image} />
        </section>
        <section>
          <p>26. Scottish. Stockholm</p>
          <br></br>
          <p>
            Graduated with Law LLB (Hons) degree, background in digital
            marketing
          </p>
          <br></br>
          <p>Passionate about Front-End Development.</p>
          <br></br>
          <p>
            Full-Stack Javascript Developer with 
            <i>
              'fantastic enthusiasm and a natural eye for all things digital'
            </i>
            .
          </p>
          <br></br>
          <p>
            JavaScript | ReactJS | HTML5 | CSS3 | REST | HTTP/JSON/AJAX | jQuery
            | ExpressJS | Node.js | MongoDB | Redux | Git | Netlify | VSCode |
            TDD: Mocha/Jest | Mob Programming | Agile, Scrum & Remote Work
            Methods | Native English Speaker
          </p>
          <br></br>
          <p>
            Recently graduated from School of Applied Technology's highly
            intensive software development bootcamp.
          </p>
          <br></br>
          <p>
            <i>
              'Caroline learns very quickly, has independent problem solving
              abilities, demonstrates natural curiosity, and has high quality
              standards for herself as well as others'
            </i>
          </p>
          <br></br>
          <p>
            <i>
              'Caroline has impressed the rest of the team with the rapid pace
              in which she makes a new concept or framework seem like her native
              tongue'
            </i>
          </p>
          <br></br>
        </section>
      </Container>
    </section>
  );
};

export default About;
