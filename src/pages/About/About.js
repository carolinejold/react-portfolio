import React from "react";
import Container from "@material-ui/core/Container";
import me from "./images/me.png";

const styles = {
  component: {
    minHeight: "100vh",
    backgroundColor: "rgb(235, 236, 232)",
    padding: '3em'
  },
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "1em",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    borderRadius: "16px",
    // padding: "1em",
    maxWidth: "65em",
  },
  text: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1em',
    border: "1px solid white",
    borderRadius: "16px",
    backgroundColor: "white",
    padding: "1.2em",
  },
  image: {
    maxWidth: "26em",
    borderRadius: "16px",
    border: "5px solid white",
    filter: "saturate(-4)",
  },
};

const About = () => {
  return (
    <section className="about" style={styles.component}>
      <Container
        className="about-container"
        style={styles.container}
        maxWidth="md"
      >
        <section style={styles.text}>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: '1.5em',
              textAlign: "center",
            }}
          >
            About
          </h1>
          <br></br>
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
        <section style={styles.children}>
          <img src={me} alt="Me" style={styles.image} />
        </section>
      </Container>
    </section>
  );
};

export default About;
