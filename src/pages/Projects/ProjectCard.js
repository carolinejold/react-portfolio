import React from "react";
import Container from "@material-ui/core/Container";
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
    border: '1px solid black',
    margin: '1em',
    padding: '0.5em'
  },
  button: {
    fontFamily: "PT Mono, monospace"
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
