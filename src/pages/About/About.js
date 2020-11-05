import React from "react";
import Container from "@material-ui/core/Container";
import me from "./images/me.png";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

const styles = {
  component: {
    minHeight: "100vh",
    backgroundColor: "rgb(235, 236, 232)",
    padding: "2em 0em 0em 0em",
  },
  header: {
    fontFamily: "Playfair Display, serif",
    fontSize: "1.5em",
    textAlign: "center",
  },
};

const About = () => {
  return (
    <section className="about" style={styles.component}>
      <Container maxWidth="lg">
        <div className="about-container">
          <Fade>
            <section className="about-text">
              <h1 style={styles.header}>About</h1>
              <br></br>
              <p>26. Scottish. Stockholm</p>
              <br></br>
              <p>
                Graduated with Law LLB (Hons) degree, background in digital
                marketing
              </p>
              <br></br>
              <br></br>
              <p>Passionate about Front-End Development.</p>
              <br></br>
              <p>
                Full-Stack Javascript Developer with 
                <i>
                  'fantastic enthusiasm and a natural eye for all things
                  digital'
                </i>
                .
              </p>
              <br></br>
              <br></br>
              <p>
                Recently graduated from School of Applied Technology's highly
                intensive software development bootcamp.
              </p>
              <br></br>
              <br></br>
              <p>
                <i>
                  'Caroline learns very quickly, has independent problem solving
                  abilities, demonstrates natural curiosity, and has high
                  quality standards for herself as well as others'
                </i>
              </p>
              <br></br>
              <br></br>
              <p>
                <i>
                  'Caroline has impressed the rest of the team with the rapid
                  pace in which she makes a new concept or framework seem like
                  her native tongue'
                </i>
              </p>
              <br></br>
              <br></br>
            </section>
            <section>
              <img className="about-image" src={me} alt="Me" />
            </section>
          </Fade>
        </div>
      </Container>

      <section style={{ textAlign: "center" }}>
        <Jump>
          <Link to="tech-skills" spy={true} smooth={true}>
            <KeyboardArrowDownOutlinedIcon
              className="intro-down-arrow"
              style={{ fontSize: "7em" }}
            />
          </Link>
        </Jump>
      </section>
    </section>
  );
};

export default About;
