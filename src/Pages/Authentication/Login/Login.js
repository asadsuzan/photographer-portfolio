import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import FormBody from "../../../Components/FormBody/FormBody";
import auth from "../../../firbaseConfig";

const Login = () => {
  const navigate = useNavigate();

  // crtae user initialize state
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // validation initialize state
  const [validate, setValidate] = useState({
    name: "",
    password: "",
    email: "",
    cPassword: "",
  });
  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // validate

    if (email === "") {
      setValidate({ ...validate, email: " Email is required" });
      return;
    }
    if (password === "") {
      setValidate({ ...validate, password: " Password is required" });
      return;
    }

    // login user
    setValidate({});
    signInWithEmailAndPassword(email, password);
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
            size=""
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>
      </div>
    );
  }
  // navigate user to destination

  if (user) {
    navigate("/");
  }
  return (
    <section className="container">
      <div className="text-center my-5 fs-1 text-uppercase">LOGIN</div>
      <FormBody action={handleLogin}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control bg-light py-2"
          />
          <span className="text-danger">{validate.email}</span>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control bg-light py-2"
          />
          <span className="text-danger">{validate.password}</span>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            Don't have and Acount? <Link to={"/signup"}>SIGN UP</Link>
          </p>
          <p>Forgot password?</p>
        </div>

        <div>
          <span className="text-danger">{error ? error.message : ""}</span>
          <input
            type="submit"
            value={"Log In"}
            className="form-control bg-danger text-white py-2"
          />
        </div>
      </FormBody>
    </section>
  );
};

export default Login;
