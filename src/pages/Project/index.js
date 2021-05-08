/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

import Container from "../../components/Container";
import Carousel_Component from "../../components/Carousel";

import Note_Taker from "./images/Note_Taker.gif";
import Weather_Channel from "./images/weatherchannel.PNG";
import Scheduler from "./images/schedule1.PNG";
import Team_List from "./images/Team_List.PNG";
import Family_Manager from "./images/familymanager.PNG";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Project() {
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#1f2833",
        paddingTop: 30,
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#66fcf1" }}>
        <b>Project</b>
      </h1>
      <div className="d-flex justify-content-center">
        <div className="project_carousel_container ">
          <Carousel responsive={responsive}>
            <Carousel_Component
              src={Note_Taker}
              title="Note Taker"
              description="Note Taker is an application that allow user to take note and save them. User can also delete whenever."
              link="https://bootcamp-homework-note-taker.herokuapp.com/"
              git="https://github.com/tuanle99/Note-Taker"
            />
            <Carousel_Component
              src={Weather_Channel}
              title="Weather Dashboard"
              description="Weather Dashboard allow user to search for the weather forecast on any U.S city."
              link="https://tuanle99.github.io/Weather-Dashboard/"
              git="https://github.com/tuanle99/Weather-Dashboard"
            />
            <Carousel_Component
              src={Scheduler}
              title="Work Day Scheduler"
              description="Work Day Scheduler allow user to create a daily plan."
              link="https://tuanle99.github.io/Work_Day_Scheduler/"
              git="https://github.com/tuanle99/Work_Day_Scheduler"
            />
            <Carousel_Component
              src={Team_List}
              title="Team List"
              description="Team List is an application that allow admin to create a team profile for their employee."
              link="#"
              git="https://github.com/tuanle99/Team-Profile-Generator"
            />
            <Carousel_Component
              src={Family_Manager}
              title="Family Manager"
              description="Family Manager is a friendly reminder app that allow parent and their child to check and see what chore they have that day. "
              link="https://family-manager-application.herokuapp.com/api/users/login"
              git="https://github.com/tuanle99/Project-2"
            />
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
export default Project;
