import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import FormBody from "../../Components/FormBody/FormBody";
import auth from "../../firbaseConfig";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Cheackout = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const book = (e) => {
    e.preventDefault();
    toast("Thanku");
    navigate("/wellcome");
  };

  return (
    <div className="container my-5" style={{ height: "100vh" }}>
      <div>
        <FormBody action={book}>
          <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" placeholder="Nmae" className="form-control" />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" placeholder="Nmae" className="form-control" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder={user.email}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              required
              type="text"
              placeholder="City Name"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              required
              type="text"
              placeholder="state"
              className="form-control"
            />
          </div>
          <div>
            <input
              type="submit"
              value={"BOOK "}
              className="form-control btn btn-danger"
            />
          </div>
        </FormBody>
      </div>
    </div>
  );
};

export default Cheackout;
