import React from "react";
import Container from "@material-ui/core/Container";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";

// order by last updated

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="projects">
      <Container>
        <h1>Projects</h1>
        <section className="projects_container">
          {projects.map((el) => (
            <ProjectCard
              key={el.name}
              name={el.name}
              description={el.description}
              url={el.url}
              homepage={el.homepage}
              language={el.language}
            />
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Projects;
