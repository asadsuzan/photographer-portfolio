import React, { useState } from "react";

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Button, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormBody from "../../../Components/FormBody/FormBody";
import auth from "../../../firbaseConfig";
import Socialauth from "../Socialauth/Socialauth";

const Signup = () => {
  const navigate = useNavigate();
  const [logdUser] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // crtae user initialize state
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // validation initialize state
  const [validate, setValidate] = useState({
    name: "",
    password: "",
    email: "",
    cPassword: "",
  });

  // handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    // validate
    if (name === "") {
      setValidate({ ...validate, name: " Name is required" });
      return;
    }
    if (email === "") {
      setValidate({ ...validate, email: " Email is required" });
      return;
    }
    if (password === "") {
      setValidate({ ...validate, password: " Password is required" });
      return;
    }
    if (cpassword === "") {
      setValidate({ ...validate, cPassword: " Please confirm passwoed" });
      return;
    }
    if (cpassword !== password) {
      setValidate({ ...validate, cPassword: " password not matched" });
      return;
    }
    // creat user
    setValidate({});
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(email);
  };

  // dispplay spiner if loding
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>
      </div>
    );
  }
  // navigate user to destination

  if (logdUser || user) {
    navigate(from, { replace: true });
  }
  return (
    <section className="container my-5 signup-form">
      <div className="text-center my-5 fs-1 text-uppercase">signup</div>
      <FormBody action={handleSignUp}>
        <div>
          <input
            type="text"
            name="name"
            placeholder={validate.name ? validate.name : "Name"}
            className={`form-control bg-light py-2 ${
              validate.name ? "placeholderStyle" : ""
            }`}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder={validate.email ? validate.email : "Email"}
            className={`form-control bg-light py-2 ${
              validate.email ? "placeholderStyle" : ""
            }`}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder={validate.password ? validate.password : "Password"}
            className={`form-control bg-light py-2 ${
              validate.password ? "placeholderStyle" : ""
            }`}
          />
        </div>
        <div>
          <input
            type="password"
            name="cpassword"
            placeholder={
              validate.cPassword ? validate.cPassword : "Confirm password"
            }
            className="form-control bg-light py-2"
          />
          <span className="text-danger">{validate.cPassword}</span>
        </div>
        <span className="text-danger">{error ? error.message : ""}</span>
        <p>
          All ready have an account? <Link to={"/login"}>LOG IN</Link>
        </p>
        <div>
          <input
            type="submit"
            value={"Sign Up"}
            className="form-control bg-danger text-white py-2"
          />
        </div>
        <Socialauth />
      </FormBody>
    </section>
  );
};

export default Signup;
