import React from "react";
import Container from "@material-ui/core/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeIcon from "@material-ui/icons/Code";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import GavelIcon from "@material-ui/icons/Gavel";

const styles = {
  component: {
    backgroundColor: "rgb(235, 236, 232)",
  },
  paragraph: {
    fontWeight: "300",
  },
  title: {
    fontFamily: "Playfair Display, serif",
    textAlign: "center",
  },
  subtitles: {
    fontFamily: "Playfair Display, serif",
    fontSize: '1.3em'
  },
  element: {
    background: "rgb(255, 255, 255)",
    border: '1px solid rgb(240, 240, 240)',
    fontFamily: "Lato, sans-serif",
    borderRadius: "16px",
    boxShadow: "none",
  },
};

const Timeline = () => {
  return (
    <div style={styles.component}>
      <Container maxWidth="lg">
        <h1 style={styles.title}>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={styles.element}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "black" }}
            icon={<GavelIcon />}
          >
            <h3 style={styles.subtitles}>Bachelor of Laws LLB (Hons)</h3>
            <h4>University of Aberdeen, UK</h4>
            <p style={styles.paragraph}>
              Graduated with a strong 2:1 law degree, receiving a 1st in my
              final dissertation.
            </p>
            <br></br>
            <small>2013-2017</small>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={styles.element}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "black" }}
            icon={<WorkOutlineIcon />}
          >
            <h3 style={styles.subtitles}>The LEGO Group</h3>
            <h4>London, UK</h4>
            <p style={styles.paragraph}>
              Digital Marketing Executive, Brand Marketing Executive.<br></br>
              Worked on all areas of digital marketing strategy for UK/I.
              <br></br>
              Skills include: SEO, PPC, Analytics, Marketing, UX/UI
            </p>
            <br></br>
            <small>2018-2019</small>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={styles.element}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "black" }}
            icon={<CodeIcon />}
          >
            <h3 style={styles.subtitles}>Full Stack JavaScript Developer</h3>
            <h4>Stockholm, Sweden</h4>
            <p style={styles.paragraph}>
              From over 1500 applicants, I am one of 24 students selected to
              partake in an intensive Full Stack JavaScript Developer training
              program. Skills include JavaScript, React, Node.js, Express,
              HTML5, CSS3, Databases incl MongoDB, UX/UI, Git, Presenting, TDD,
              Agile & Mob Programming. https://salt.study/
            </p>
            <br></br>
            <small>2020-present</small>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={styles.element}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "black" }}
            icon={<CodeIcon />}
          >
            <h3 style={styles.subtitles}>
              Open to Software Development Opportunities...
            </h3>
            <h4>Stockholm, Sweden</h4>
            <p style={styles.paragraph}>
              Will your company be next on my timeline...? <br></br>
              (Front End/Full Stack, via <a href="https://salt.dev/">salt</a>)
            </p>
            <br></br>
            <small>2020-present</small>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(255, 255, 255)", color: "black" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Timeline;
