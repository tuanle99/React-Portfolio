import React from "react";
import Container from "../../components/Container";
import "./style.css";
import experiences from "../../data/experience_list_data.json";
import Education from "./Education";

function Resume() {
  return (
    <Container fluid="true" className="resume_background">
      <h3>Resume</h3>
      <h2 className="resume_second_color resume_padding">
        Here are my work experiences and education.
      </h2>
      <h3 className="resume_padding">Work Experience</h3>
      {experiences.experience_list.map((e) => {
        return (
          <div
            className="resume_second_color row "
            style={{ padding: 30 }}
            key={e.title}
          >
            <div className="col-lg-5 col-md-5 col-sm-12 resume_left">
              <h4>{e.title}</h4>
              <p>{e.date}</p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 resume_right">
              <p>{e.description}</p>
            </div>
          </div>
        );
      })}
      <Education />
    </Container>
  );
}

export default Resume;
