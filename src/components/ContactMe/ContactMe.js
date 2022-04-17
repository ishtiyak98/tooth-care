import React from "react";
import Iframe from "react-iframe";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="my-5 container" id="contact">
      <h1 className="text-success text-center mb-5">Contact Me</h1>
      <div className="row gy-4">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center">
            <div>
              <h4 className="mb-0 text-secondary">Contact me</h4>
              <h4 className="mb-0 text-secondary">whenever you need</h4>
              <div className="mt-4 ms-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 text-success d-flex align-items-center justify-content-center contact-icon">
                    <MdLocationOn size={"2em"}></MdLocationOn>
                  </div>
                  <div>
                    <h5 className="mb-1 text-secondary">Address</h5>
                    <h6 className="mb-0 fw-light text-secondary">
                      528 tenth Avenue, Boston, BT 58965
                    </h6>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 text-success d-flex align-items-center justify-content-center contact-icon">
                    <FaPhoneAlt size={"1.3em"}></FaPhoneAlt>
                  </div>
                  <div>
                    <h5 className="mb-1 text-secondary">Phone</h5>
                    <h6 className="mb-0 fw-light text-secondary">
                      +1 800 125 65 24
                    </h6>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 text-success d-flex align-items-center justify-content-center contact-icon">
                    <AiFillSchedule size={"1.5em"}></AiFillSchedule>
                  </div>
                  <div>
                    <h5 className="mb-1 text-secondary">Open Hours</h5>
                    <h6 className="mb-0 fw-light text-secondary">
                      Mn - St: 8:00am - 9:00pm Sn: Closed
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center">
            <div className="w-75">
              <Iframe
                id="map-id"
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7180.612911995584!2d88.35544472225786!3d25.859389315854088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c593a9d38c91%3A0xb5a22e9771da875d!2sNur%20Dental%20Care!5e0!3m2!1sen!2sbd!4v1650203639764!5m2!1sen!2sbd"
                width="300"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
