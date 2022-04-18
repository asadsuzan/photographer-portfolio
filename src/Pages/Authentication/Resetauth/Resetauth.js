import { Button } from "bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firbaseConfig";

const Resetauth = () => {
  const naviigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  const emailRef = useRef();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleResetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
  };

  if (sending) {
    return (
      <p
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "100vh" }}
      >
        <Spinner
          as="span"
          animation="grow"
          size=""
          role="status"
          aria-hidden="true"
        />
        Seding
      </p>
    );
  }

  return (
    <div className="container">
      <div
        className="bg-light  w-50 p-5 mx-auto shadow my-5 d-"
        style={{ height: "300px" }}
      >
        <form onSubmit={handleResetPass}>
          <div>
            <span className="text-danger">{error ? error.message : ""}</span>
            <input
              required
              type="email"
              placeholder="Your Email"
              className=" w-100 form-control"
              name="email"
              ref={emailRef}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => setConfirm(!confirm)}
              className="me-2"
            />
            <span className={`${confirm ? "text-primary" : "text-danger"}`}>
              We will sent you a password reset email
            </span>
          </div>
          <div className="mt-4">
            <input
              disabled={!confirm}
              type="submit"
              value={"send"}
              className="form-control w-50 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetauth;
