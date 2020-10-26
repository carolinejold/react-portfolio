import React from "react";

const ProjectCard = ({
  name,
  description,
  url,
  homepage,
  created_at,
  language,
  i,
}) => {
  return (
    <div>
      <p>key = {name}</p>
      <p>name = {name}</p>
      <p>description={description}</p>
      <p>url = {url}</p>
      <p>homepage = {homepage}</p>
      <p>created_at = {created_at}</p>
      <p>language = {language}</p>
      <p>i = {i}</p>
    </div>
  );
};

export default ProjectCard;
