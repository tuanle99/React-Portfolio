import React from "react";
import { scroller } from "react-scroll";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar_container">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" style={{ padding: 0 }}>
        <Nav className="mr-auto ml-auto">
          <Nav.Link
            onClick={() =>
              scroller.scrollTo("home_path", { smooth: true, duration: 500 })
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              scroller.scrollTo("about_path", { smooth: true, duration: 500 })
            }
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              scroller.scrollTo("resume_path", {
                smooth: true,
                duration: 500,
              })
            }
          >
            Resume
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              scroller.scrollTo("project_path", {
                smooth: true,
                duration: 500,
                offset: -50,
              })
            }
          >
            Project
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              scroller.scrollTo("contact_path", {
                smooth: true,
                duration: 500,
              })
            }
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
