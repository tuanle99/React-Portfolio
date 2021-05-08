import React from "react";
import "./style.css";
import Container from "../../components/Container";
import { FaLinkedin, FaSkype, FaEnvelope, FaGithub } from "react-icons/fa";
import Icon from "../../components/Icon";

function Home() {
  return (
    <div style={{ height: 800 }}>
      <Container fluid="true" className="home_backgroundStyle">
        <h1 className="home_centerText">Tuan Le</h1>
        <div className="home_icon_container">
          <Icon href={"https://www.linkedin.com/in/tuan-le-73712a194/"}>
            <FaLinkedin size={40} />
          </Icon>
          <Icon href={"mailto:tuanleprofessional@gmail.com"}>
            <FaEnvelope size={40} />
          </Icon>
          <Icon href={"https://join.skype.com/invite/BKDerDhnP3IE"}>
            <FaSkype size={40} />
          </Icon>
          <Icon href={"https://github.com/tuanle99"}>
            <FaGithub size={40} />
          </Icon>
        </div>
      </Container>
    </div>
  );
}

export default Home;
