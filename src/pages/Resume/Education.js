import React from "react";
import "./style.css";
import Container from "../../components/Container";
import education_data from "../../data/education_data.json";

function Education() {
  return (
    <Container fluid="true">
      <h2 className="resume_padding">Education</h2>
      {education_data.education_list.map((e) => {
        return (
          <div
            className="resume_second_color row"
            style={{ padding: 30 }}
            key={e.title}
          >
            <div
              className="col-lg-5 col-md-5 col-sm-12 resume_left"
              key={e.title}
            >
              <h4>{e.title}</h4>
              <p>{e.date}</p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 resume_right">
              {e.description.map((detail) => {
                return <p key={detail}>{detail}</p>;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default Education;
