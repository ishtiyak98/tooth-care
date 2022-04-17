import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { id, name, img, price, description } = service;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="p-3 service-card mx-auto">
        <div>
          <div className="img-container">
            <img className="img-fluid w-100" src={img} alt="" />
          </div>
          <div className="">
            <h3 className="my-3">{name}</h3>
            <p>{description}</p>
            <div className="d-flex align-items-center justify-content-between pb-2">
              <Link className="btn btn-success" to={`/checkout/${id}`}>Checkout</Link>
              <p className="mb-0 fw-bold fs-5">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
