import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div
        className="container d-flex h-100  flex-column justify-content-center"
        style={{ gap: "20px" }}
      >
        <div>
          <div className="text-white">
            <span className="fs-5 fw-bolder">welcome to my</span>
          </div>
          <div className="text-uppercase text-light mt-1">
            <h1 className="fw-bolder display-4">legend studio</h1>
          </div>
        </div>
        <div>
          <p className="w-50 text-light">
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold.
          </p>
        </div>
        <div>
          <button className="b-btn py-1 px-5 bg-transparent text-light">
            My work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
