import React from "react";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";


const styles = {
  component: {
    height: "100vh",
    backgroundColor: "rgb(235, 236, 232)",
  },
  header: {
    paddingTop: "4em",
    textAlign: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "1em",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2em",
  },
};

const Contact = () => {
  return (
    <div className="contact" style={styles.component}>
      <div style={styles.cover}>
        <h1 style={styles.header}>Contact</h1>
        <Container style={styles.container} maxWidth="lg">
          <a href="https://www.linkedin.com/in/carolinejold/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="https://www.instagram.com/caroline_codes/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="mailto:carolinejold@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailOutlineIcon fontSize="large" style={{ color: "black" }} />
          </a>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
