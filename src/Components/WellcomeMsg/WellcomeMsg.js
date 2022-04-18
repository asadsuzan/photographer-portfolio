import React from "react";
import { useNavigate } from "react-router-dom";

const WellcomeMsg = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center flex-column align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>Than You for Boook This Pakage</h1>
        <p>I will make you pleasure and reach you at time</p>
        <button className="btn-danger btn" onClick={() => navigate("/")}>
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default WellcomeMsg;
