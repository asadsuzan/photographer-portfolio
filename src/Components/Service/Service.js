import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceInfo from "../../sinfo/serviceinfo";
import "./Service.css";

const Service = () => {
  const [services] = useState(serviceInfo);
  const navigate = useNavigate();

  return (
    <section className="services">
      {/*-section title here */}
      <div className="text-center my-5">
        <h3>My Services</h3>
        <p className="w-50 mx-auto">
          Quverra tristique justo duis vitae diam neque nivamus aestan ateuene
          artinaelition finibus viverra nec lacus setlie suscipe tristique.
        </p>
      </div>
      {/* services items here */}
      <div className="container">
        <div className="s-wraper align-items-center ">
          {services.map((service, index) => {
            const { name, icon, des, price } = service;
            return (
              <div
                key={index}
                className=" d-flex flex-column justify-content-center align-items-center roundeed shadow bg-light item  position-relative "
                style={{ gap: "10px" }}
              >
                {/* for price */}
                <div>
                  <span className="text-info fs-1">${price}</span>
                </div>
                {/* for icon */}
                <div>
                  <img
                    src={icon}
                    alt={name}
                    className="img-fluid"
                    width="45px"
                  />
                </div>
                {/* for item name */}
                <div>
                  <h4>{name}</h4>
                </div>
                {/* for description */}
                <div className="text-center">
                  <p>{des}</p>
                </div>
                {/* for booking button */}
                <div className=" position-absolute w-100 shadow-lg  s-btn">
                  <button
                    onClick={() => navigate("/cheackout")}
                    className="w-100 py-5 text-info fs-3"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
