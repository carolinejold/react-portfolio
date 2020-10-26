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
import timelineBackground from "./images/timelineBackground.jpeg";

const styles = {
  component: {
    backgroundImage: `url(${timelineBackground})`,
  },
  cover: {
    background: "black",
    opacity: "0.8",
    height: "170vh",
  },
};

const Timeline = () => {
  return (
    <div style={styles.component}>
      <div style={styles.cover}>
        <Container maxWidth="lg">
          <h1>Timeline</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(0, 0, 0)",
                color: "#fff",
                fontFamily: "PT Mono, monospace",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
              date="2013 - 2017"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              icon={<GavelIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Laws LLB (Hons)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of Aberdeen, UK
              </h4>
              <p>
                Graduated with a strong 2:1 law degree, receiving a 1st in my
                final dissertation.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              cclassName="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(0, 0, 0)",
                color: "#fff",
                fontFamily: "PT Mono, monospace",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
              date="2018 - 2019"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              icon={<WorkOutlineIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                The LEGO Group
              </h3>
              <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
              <p>
                Digital Marketing Executive, Brand Marketing Executive.<br></br>
                Worked on all areas of digital marketing strategy for UK/I.
                <br></br>
                Skills include: SEO, PPC, Analytics, Marketing, UX/UI
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(0, 0, 0)",
                color: "#fff",
                fontFamily: "PT Mono, monospace",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
              date="2020 - present"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              icon={<CodeIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack JavaScript Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Stockholm, Sweden
              </h4>
              <p>
                From over 1500 applicants, I am one of 24 students selected to
                partake in an intensive Full Stack JavaScript Developer training
                program. Skills include JavaScript, React, Node.js, Express,
                HTML5, CSS3, Databases incl MongoDB, UX/UI, Git, Presenting,
                TDD, Agile & Mob Programming. https://salt.study/
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(0, 0, 0)",
                color: "#fff",
                fontFamily: "PT Mono, monospace",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
              date="2013 - 2017"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              icon={<CodeIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Open to Software Development Opportunities...
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Stockholm, Sweden
              </h4>
              <p>
                Will your company be next on my timeline...? <br></br>
                (Front End/Full Stack, via <a href="https://salt.dev/">salt</a>)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              // icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Container>
      </div>
    </div>
  );
};

export default Timeline;
