import React from "react";
import Container from "../../components/Container";
import "./style.css";
import {
  FaMapMarked,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const icon_size = 80;
  return (
    <Container fluid="true" className="contactContainer">
      <h4 className="contactText contactMain">Contact</h4>
      <h1 className="contactText2">Let's Create a Connection</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 contactMain contactDiv">
          <FaMapMarked size={icon_size} className="" />
          <h5>Address</h5>
          <div className="contactSec">
            <p>735 Avalon Forest Dr</p>
            <p>Lawrenceville, GA</p>
            <p>30044</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 contactMain contactDiv">
          <a
            href="https://www.linkedin.com/in/tuan-le-73712a194/"
            className="contactMain"
          >
            <FaLinkedinIn size={icon_size} className="" />
            <h5>Let's Connect</h5>
          </a>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 contactMain contactDiv">
          <FaEnvelope size={icon_size} className="" />
          <h5>Email Me At</h5>
          <p className="contactSec">tuanleprofessional@gmail.com</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 contactMain contactDiv">
          <a href="https://github.com/tuanle99" className="contactMain">
            <FaGithub size={icon_size} className="" />
            <p>Check Out More of My Projects</p>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
