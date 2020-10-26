import React from "react";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    width: '15em',
    height: '15em',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid whitesmoke',
    margin: '1em',
    padding: '0.5em',
    color: 'whitesmoke'
  },
  button: {
    fontFamily: "PT Mono, monospace",
    color: 'whitesmoke'
  }
};

const ProjectCard = ({ name, description, url }) => {
  return (
    <section key={name} style={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button href={url} target="_blank" style={styles.button}>View on GitHub</Button>
    </section>
  );
};

export default ProjectCard;
