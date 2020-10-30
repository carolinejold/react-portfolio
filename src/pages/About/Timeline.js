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
    textAlign: "left",
  },
  paragraph: {
    fontWeight: '300'
  }
};

const Timeline = () => {
  return (
    <div style={styles.component}>
      <Container maxWidth="lg">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(240, 240, 240)",
              color: "black",
              fontFamily: "PT Mono, monospace",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(240, 240, 240)" }}
            date="2013 - 2017"
            iconStyle={{ background: "rgb(240, 240, 240)", color: "black" }}
            icon={<GavelIcon />}
          >
            <h3>Bachelor of Laws LLB (Hons)</h3>
            <h4>University of Aberdeen, UK</h4>
            <p style={ styles.paragraph }>
              Graduated with a strong 2:1 law degree, receiving a 1st in my
              final dissertation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(240, 240, 240)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(240, 240, 240)" }}
            date="2018 - 2019"
            iconStyle={{ background: "rgb(240, 240, 240)", color: "black" }}
            icon={<WorkOutlineIcon />}
          >
            <h3>The LEGO Group</h3>
            <h4>London, UK</h4>
            <p style={ styles.paragraph }>
              Digital Marketing Executive, Brand Marketing Executive.<br></br>
              Worked on all areas of digital marketing strategy for UK/I.
              <br></br>
              Skills include: SEO, PPC, Analytics, Marketing, UX/UI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(240, 240, 240)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(240, 240, 240)" }}
            date="2020 - present"
            iconStyle={{ background: "rgb(240, 240, 240)", color: "black" }}
            icon={<CodeIcon />}
          >
            <h3>Full Stack JavaScript Developer</h3>
            <h4>Stockholm, Sweden</h4>
            <p style={ styles.paragraph }>
              From over 1500 applicants, I am one of 24 students selected to
              partake in an intensive Full Stack JavaScript Developer training
              program. Skills include JavaScript, React, Node.js, Express,
              HTML5, CSS3, Databases incl MongoDB, UX/UI, Git, Presenting, TDD,
              Agile & Mob Programming. https://salt.study/
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(240, 240, 240)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(240, 240, 240)" }}
            date="2013 - 2017"
            iconStyle={{ background: "rgb(240, 240, 240)", color: "black" }}
            icon={<CodeIcon />}
          >
            <h3>Open to Software Development Opportunities...</h3>
            <h4>Stockholm, Sweden</h4>
            <p style={ styles.paragraph }>
              Will your company be next on my timeline...? <br></br>
              (Front End/Full Stack, via <a href="https://salt.dev/">salt</a>)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(240, 240, 240)", color: "black" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Timeline;
