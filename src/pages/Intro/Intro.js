import React from "react";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Fade from "react-reveal/Fade";
import "./Intro.css";

const styles = {
  component: {
    height: "100vh",
    backgroundImage:
      'url("https://images.pexels.com/photos/403575/pexels-photo-403575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Playfair Display, serif",
    textAlign: "left",
  },
  padding: {
    padding: "15em 0em 0em 13%",
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
              Front End Software Developer with a passion for blockchain
              technology
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
