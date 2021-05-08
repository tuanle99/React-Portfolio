import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <Wrapper>
          <Element id="home_path" className="element">
            <Home />
          </Element>
          <Element id="about_path" className="element">
            <About />
          </Element>
          <Element id="resume_path" className="element">
            <Resume />
          </Element>
          <Element id="project_path" className="element">
            <Project />
          </Element>
          <Element id="contact_path" className="element">
            <Contact />
          </Element>
        </Wrapper>
      </React.StrictMode>
    </div>
  );
}

export default App;
