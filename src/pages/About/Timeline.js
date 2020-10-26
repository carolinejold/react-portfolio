import React from "react";
import Container from "@material-ui/core/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import Lego from './images/LEGO.svg'

const Timeline = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
            date="2020 - present"
            iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            // icon={<WorkIcon />}
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
              HTML5, CSS3, Databases incl MongoDB, UX/UI, Git, Presenting, TDD,
              Agile & Mob Programming. https://salt.study/
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={Lego}
          >
            <h3 className="vertical-timeline-element-title">The LEGO Group</h3>
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
            date="2013 - 2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
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
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Timeline;
