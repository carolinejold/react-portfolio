import React from "react";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    width: "15em",
    height: "15em",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    border: '1px solid rgb("240, 240, 240")',
    borderRadius: "16px",
    margin: "1em",
    padding: "0.5em",
    backgroundColor: "white",
  },
  titles: {
    fontFamily: "Playfair Display, serif",
  },
  text: {
    fontFamily: "Lato, sans-serif",
  },
  button: {},
};

const ProjectCard = ({ name, description, url }) => {
  return (
    <section key={name} style={styles.card}>
      <h2 style={styles.titles}>{name}</h2>
      <p style={styles.text}>{description}</p>
      <Button href={url} target="_blank" style={styles.button}>
        View on GitHub
      </Button>
    </section>
  );
};

export default ProjectCard;
