import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Fade from "react-reveal/Fade";

const styles = {
  component: {
    minHeight: "100vh",
    backgroundColor: "rgb(235, 236, 232)",
  },
  header: {
    padding: "1em 0em 1em 0em",
    textAlign: "center",
    fontFamily: "Playfair Display, serif",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50em",
  },
  card: {
    width: "15em",
    height: "12em",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    border: '1px solid rgb("240, 240, 240")',
    borderRadius: "16px",
    margin: "1em",
    padding: "1.5em 0.5em 1em 0.5em",
    backgroundColor: "white",
  },
  titles: {
    fontFamily: "Playfair Display, serif",
    padding: "0em 0em 0.5em 0em",
  },
  text: {
    fontFamily: "Lato, sans-serif",
  },
};

const TechSkills = () => {
  return (
    <div className="tech-skills" style={styles.component}>
      <h1 style={styles.header}>Tech Skills</h1>
      <Container maxWidth="lg" style={styles.container}>
        <Fade>
          <section style={styles.card}>
            <h2 style={styles.titles}>Languages</h2>
            <p style={styles.text}>
              <p>JavaScript</p>
              <p>TypeScript</p>
            </p>
          </section>
          <section style={styles.card}>
            <h2 style={styles.titles}>Front End</h2>
            <p style={styles.text}>
              <p>ReactJS</p>
              <p>GatsbyJS</p>
              <p>Redux</p>
              <p>HTML5</p>
              <p>CSS3/SASS</p>
              <p>Bootstrap/MaterialUI</p>
            </p>
          </section>
          <section style={styles.card}>
            <h2 style={styles.titles}>Back End</h2>
            <p style={styles.text}>
              <p>Node.js</p>
              <p>ExpressJS</p>
              <p>REST/GraphQL</p>
              <p>HTTP/JSON/AJAX</p>
              <p>MongoDB</p>
              <p>Socket.io</p>
            </p>
          </section>
          <section style={styles.card}>
            <h2 style={styles.titles}>Tools & Methods</h2>
            <p style={styles.text}>
              <p>Git</p>
              <p>Netlify</p>
              <p>Mocha/Jest</p>
              <p>Cypress</p>
              <p>Mob Programming</p>
              <p>Agile, Scrum & Remote Work Methods</p>
            </p>
          </section>
        </Fade>
      </Container>
      <section style={{ textAlign: "center", paddingTop: "10em" }}>
        <Jump>
          <Link to="timeline" spy={true} smooth={true}>
            <KeyboardArrowDownOutlinedIcon
              className="intro-down-arrow"
              style={{ fontSize: "7em" }}
            />
          </Link>
        </Jump>
      </section>
    </div>
  );
};

export default TechSkills;
