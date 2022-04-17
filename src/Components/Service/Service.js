import React, { useState } from "react";
import serviceInfo from "../../sinfo/serviceinfo";

const Service = () => {
  const [services] = useState(serviceInfo);

  return (
    <section className="services">
      {/*-section title here */}
      <div className="text-center">
        <h3>My Services</h3>
        <p className="w-50 mx-auto">
          Quverra tristique justo duis vitae diam neque nivamus aestan ateuene
          artinaelition finibus viverra nec lacus setlie suscipe tristique.
        </p>
      </div>
      {/* services items here */}
      <div className="container">
        <div className="row g-3 shadow-lg s-wraper ">
          {services.map((service, index) => {
            const { name, icon, des, price } = service;
            return (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-0  d-flex flex-column m-0 p-5  item"
                style={{ gap: "10px" }}
              >
                {/* for price */}
                <div>
                  <span>${price}</span>
                </div>
                {/* for icon */}
                <div>
                  <img
                    src={icon}
                    alt={name}
                    className="img-fluid "
                    width="45px"
                  />
                </div>
                {/* for item name */}
                <div>
                  <h4>{name}</h4>
                </div>
                {/* for description */}
                <div>
                  <p>{des}</p>
                </div>
                {/* for booking button */}
                <div>
                  <button>Book Now</button>
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
