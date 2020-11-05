import React from "react";
import Container from "@material-ui/core/Container";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Fade from "react-reveal/Fade";

// order by last updated

const styles = {
  component: {
    backgroundColor: "rgb(235, 236, 232)",
    minHeight: "100vh",
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
    maxWidth: "70em",
  },
};

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="projects" style={styles.component}>
      <Fade>
        <h1 style={styles.header}>Projects</h1>
      </Fade>
      <Fade cascade>
        <Container style={styles.container}>
          {projects.map((el) => (
            <ProjectCard
              key={el.name}
              name={el.name}
              description={el.description}
              url={el.url}
            />
          ))}
        </Container>
        <section style={{ textAlign: "center", paddingBottom: "2em" }}>
          <Jump>
            <Link to="contact" spy={true} smooth={true}>
              <KeyboardArrowDownOutlinedIcon
                className="intro-down-arrow"
                style={{ fontSize: "7em" }}
              />
            </Link>
          </Jump>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;
