import React from "react";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";

const styles = {
  component: {
    // backgroundColor: "rgb(235, 236, 232)",
    backgroundImage:
      'url("https://images.pexels.com/photos/532566/pexels-photo-532566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  header: {
    paddingTop: "1em",
    textAlign: "center",
    fontFamily: "Playfair Display, serif",
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
        <Fade>
          <h1 style={styles.header}>Contact</h1>
        </Fade>
        <Container style={styles.container} maxWidth="lg">
          <Fade>
            <a
              href="https://www.linkedin.com/in/carolinejold/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "black", fontSize: "3em" }}
              />
            </a>
            <a
              href="https://www.instagram.com/caroline_codes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                fontSize="large"
                style={{ color: "black", fontSize: "3em" }}
              />
            </a>
            <a
              href="mailto:carolinejold@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon
                fontSize="large"
                style={{ color: "black", fontSize: "3em" }}
              />
            </a>
          </Fade>
        </Container>
        <section style={{ textAlign: "center", paddingBottom: "2em" }}>
          <Jump>
            <Link to="intro" spy={true} smooth={true}>
              <KeyboardArrowUpOutlinedIcon
                className="intro-down-arrow"
                style={{ fontSize: "7em", paddingTop: "2em" }}
              />
            </Link>
          </Jump>
        </section>
      </div>
    </div>
  );
};

export default Contact;
