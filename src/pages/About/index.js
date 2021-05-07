import React from "react";
import Container from "../../components/Container";
import "./style.css";
import ProfileImage from "../../images/ProfileImage.jpg";

import Profile from "../Profile";
import Skills from "../Skills";

function About() {
  return (
    <Container fluid="true" className="about_background">
      <div
        className="row section-intro"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="col-12">
          <h3 className="about_me">About Me</h3>
          <div className="content-intro">
            <img
              src={ProfileImage}
              className="profile_img"
              alt="Profile Pciture"
            />
            <p className="profile_text text_secondary">
              I am currently an undergraduate at Georgia Institute of Technology
              majoring in Computer Science. My primary interest is becoming a
              fullstack developer for both web application and mobile
              application.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <Profile />
        </div>
        <div className="col-4">
          <Skills />
        </div>
        <div className="col-2"></div>
      </div>
    </Container>
  );
}

export default About;
