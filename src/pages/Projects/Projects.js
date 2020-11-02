import React from "react";
import Container from "@material-ui/core/Container";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";

// order by last updated

const styles = {
  component: {
    backgroundColor: "rgb(235, 236, 232)",
  },
  header: {
   padding: '3em 0em 1em 0em',
   textAlign: 'center',
   fontFamily: "Playfair Display, serif",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "70em",
    paddingBottom: "2em"
  }
};

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="projects" style={styles.component}>
      <h1 style={styles.header}>Projects</h1>
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
    </div>
  );
};

export default Projects;
