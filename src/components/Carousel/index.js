/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Carousel_Component(props) {
  return (
    <div className="card text-left mt-5">
      <img
        className="media-img card-img-top"
        src={props.src}
        alt="Note Taker"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.git} target="_blank">
          <button type="button" className="btn btn-primary mr-2">
            Github Repository
          </button>
        </a>
        <a href={props.link} target="_blank">
          <button type="button" className="btn btn-primary">
            Deploy Link
          </button>
        </a>
      </div>
    </div>
  );
}

export default Carousel_Component;
