import React from "react";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  return (
    <div className="contact">
      <Container maxWidth="lg">
        <h1>Contact</h1>
        <LinkedInIcon fontSize="large" color="primary" />
        <InstagramIcon fontSize="large" color="primary" />
        <MailOutlineIcon fontSize="large" color="primary" />
      </Container>
    </div>
  );
};

export default Contact;
