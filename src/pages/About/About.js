import React from "react";
import Container from "@material-ui/core/Container";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="about">
      <Container maxWidth="lg">
        <h1>About</h1>
        <p>26. Scottish. Stockholm</p>{" "}
        <p>
          Graduated with Law LLB (Hons) degree, background in digital marketing
        </p>
        <p>Passionate about Front-End Development.</p>
        <p>
          Full-Stack Javascript Developer with 
          <i>'fantastic enthusiasm and a natural eye for all things digital'</i>
          .
        </p>
        <p>
          JavaScript | ReactJS | HTML5 | CSS3 | REST | HTTP/JSON/AJAX | jQuery |
          ExpressJS | Node.js | MongoDB | Redux | Git | Netlify | VSCode | TDD:
          Mocha/Jest | Mob Programming | Agile, Scrum & Remote Work Methods |
          Native English Speaker
        </p>
        <p>
          Recently graduated from School of Applied Technology's highly
          intensive software development bootcamp.
        </p>
        <p>
          <i>
            'Caroline learns very quickly, has independent problem solving
            abilities, demonstrates natural curiosity, and has high quality
            standards for herself as well as others'
          </i>
        </p>
        <p>
          <i>
            'Caroline has impressed the rest of the team with the rapid pace in
            which she makes a new concept or framework seem like her native
            tongue'
          </i>
        </p>
        <Timeline />
      </Container>
    </div>
  );
};

export default About;
