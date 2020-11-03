import React from "react";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Fade from "react-reveal/Fade";

const styles = {
  component: {
    backgroundImage:
      'url("https://images.pexels.com/photos/403575/pexels-photo-403575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Playfair Display, serif",
    textAlign: "left",
  },
  padding: {
    padding: "15em 0em 0em 13%",
  },
  container: {},
  link: {
    fontSize: "1em",
    border: "solid 1px  rgb(37, 37, 36)",
    borderRadius: "10px",
    padding: "0.6em 1.4em 0.8em 1.4em",
    margin: "0em 0.2em 0em 0.2em",
    fontFamily: "Lato, sans-serif",
    background: "rgba(255, 255, 255, 0.2)",
  },
};

const Intro = () => {
  return (
    <div className="intro" style={styles.component}>
      <div style={styles.padding}>
        <Fade>
          <div className="intro-container">
            <h1>Hi, I'm Caroline Old</h1>
            <br></br>
            <h3>
              Full-stack JavaScript developer with a passion for front-end web
              development
            </h3>
            <br></br>
            <h3>Want to learn more?</h3>
            <Jump>
              <Link to="about" spy={true} smooth={true}>
                <KeyboardArrowDownOutlinedIcon
                  className="intro-down-arrow"
                  style={{ fontSize: "7em" }}
                />
              </Link>
            </Jump>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
