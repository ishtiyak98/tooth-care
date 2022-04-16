import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="top-banner">
      <div className="container">
        <div className="d-flex align-items-center header-text">
          <div>
            <p className="fs-5 text-white mb-0">I USE LATEST DENTAL TECHNOLOGY</p>
            <h1 className="title-text text-white mb-0">Let Me Brighten</h1>
            <h1 className="title-text text-white mb-0">Your Smile</h1>
            <button className="btn btn-success mt-4 px-4">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
