import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// import Scroll from "react-scroll";

function Navbar() {
  // const ScrollLink = Scroll.ScrollLink;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
