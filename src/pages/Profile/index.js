import React from "react";
import Container from "../../components/Container";
import resumePDF from "../../images/TuanLeResume.pdf";
import "./style.css";

function Profile() {
  return (
    <Container fluid="true">
      <div class="profile_skill_section text_primary">
        <h3>PROFILE</h3>
        <div class="text_secondary">
          <p>
            I am currently an undergraduate pursuing a Bachelor Degree in
            Computer Science. I am also seeking full time/part time internship
            for sotware engineering/full stack developer position.
          </p>
          <p>Exptected Date: 12/22</p>
        </div>
        <h5>FULLNAME:</h5>
        <p class="text_secondary">Tuan Le</p>
        <h5>BIRTH DATE:</h5>
        <p class="text_secondary">March 24, 1999</p>
        <h5>EMAIL:</h5>
        <p class="text_secondary">tuanleprofessional@gmail.com</p>
        <a href={resumePDF} download="">
          <button type="button" class="btn btn-primary">
            Download CV
          </button>
        </a>
      </div>
    </Container>
  );
}

export default Profile;
