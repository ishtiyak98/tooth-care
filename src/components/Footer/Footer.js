import React from "react";
import { FaTooth } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pt-5 mt-5">
      <div className="bg-success text-white py-4">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-lg-start justify-content-center my-3">
                <FaTooth size={"2em"}></FaTooth>
                <span className="fs-2 mx-2">ToothCare</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-lg-center justify-content-center my-3">
                ToothCare &copy; 2022 | all rights reserved
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-lg-end justify-content-center my-3">
                <a href="https://www.facebook.com" target={"_blank"}>
                  <span className="social-icon mx-2">
                    <FaFacebookF size={"1.2em"}></FaFacebookF>
                  </span>
                </a>
                <a href="https://twitter.com/" target={"_blank"}>
                  <span className="social-icon mx-2">
                    <FaTwitter size={"1.2em"}></FaTwitter>
                  </span>
                </a>
                <a href="https://www.youtube.com" target={"_blank"}>
                  <span className="social-icon mx-2">
                    <FaYoutube size={"1.2em"}></FaYoutube>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
