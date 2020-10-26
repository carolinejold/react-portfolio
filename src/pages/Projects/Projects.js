import React from "react";
import Container from "@material-ui/core/Container";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";

// order by last updated

const styles = {
  container: {
    display: "flex",
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '70em',
  },
};

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="projects">
      <h1>Projects</h1>
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
