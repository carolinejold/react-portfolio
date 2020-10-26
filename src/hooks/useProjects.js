import { useEffect, useState } from "react";
import axios from "axios";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api.github.com/users/carolinejold/repos?sort=updated",
      method: "get"
    //   headers: {
    //     Accept: "application/vnd.github.nebula-preview+json",
    //   },
    })
      .then((response) => {
        response.data.map((project) => {
          const newProject = {
            name: project.name,
            description: project.description,
            url: project.html_url,
            homepage: project.homepage,
            created_at: project.created_at,
            language: project.language,
          };
          setProjects((projects) => [...projects, newProject]);
          return null;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return projects;
}

export default useProjects;
