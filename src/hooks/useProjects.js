import { useEffect, useState } from "react";
import axios from "axios";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api.github.com/users/carolinejold/repos?sort=updated",
      method: "get",
      //   headers: {
      //     Accept: "application/vnd.github.nebula-preview+json",
      //   },
    })
      .then((response) => {
        response.data.map((el) => {
          const newProject = {
            name: el.name,
            description: el.description,
            url: el.html_url,
            homepage: el.homepage,
            created_at: el.created_at,
            language: el.language,
          };
          setProjects((projects) => [...projects, newProject]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return projects;
};

export default useProjects;
