import React, { useState, useEffect } from "react";
import SkillBar from "react-skillbars";
import skill_data from "../../data/skill_data.json";
import Container from "../../components/Container";

function Skills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setSkill(skill_data.skill_array);
  }, []);

  const colors = {
    bar: "gray",
    title: {
      text: "#66fcf1",
      background: "black",
    },
  };
  return (
    <Container fluid="true" style={{ textAlign: "left" }}>
      <h3>SKILLS</h3>
      <p style={{ color: "#c5c6c7" }}>
        I'm an independent and a teamplayer that's strong in research and coding
        and also communication. My area of expertise are front-end and back-end
        for web application.
      </p>
      <SkillBar skills={skill} colors={colors} height={20} />
    </Container>
  );
}

export default Skills;
