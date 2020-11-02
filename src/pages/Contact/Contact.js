import React from "react";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import contactBackground from "./images/contactBackground.jpeg";
import { Link } from "react-scroll";

const styles = {
  component: {
    height: "100vh",
  },
  header: {
    paddingTop: "4em",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1em",
  },
};

const Contact = () => {
  return (
    <div className="contact" style={styles.component}>
      <div style={styles.cover}>
        <h1 style={styles.header}>Contact</h1>
        <Container style={styles.container} maxWidth="lg">
          <a href="https://www.linkedin.com/in/carolinejold/" target="_blank">
          <LinkedInIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="https://www.instagram.com/caroline_codes/" target="_blank">
          <InstagramIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="mailto:carolinejold@gmail.com" target="_blank">
          <MailOutlineIcon fontSize="large" style={{ color: "black" }} />
          </a>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
