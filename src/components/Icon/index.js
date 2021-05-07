import React from "react";
import "./style.css";

function Icon(props) {
  return (
    <a href={props.href} target="blank_" className="home_link_icon">
      {props.children}
    </a>
  );
}

export default Icon;
