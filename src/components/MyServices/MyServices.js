import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const MyServices = () => {
    const [services, setServices]=useState([]);

    useEffect( ()=>{
        fetch("services.json")
        .then(response => response.json())
        .then(data => setServices(data));
    }, []);

    console.log(services);

  return (
    <div id="my-services" className="container my-5 py-5">
      <h2 className="text-center text-success fw-bold mb-5">My Services</h2>
      <div className="row gy-5 gx-4">
          {
              services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
          }
      </div>
    </div>
  );
};

export default MyServices;
