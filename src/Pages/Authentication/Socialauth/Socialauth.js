import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import auth from "../../../firbaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Socialauth = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="social-auth-page container">
      <div className="devider d-flex align-items-center">
        <div className="bg-info w-100" style={{ height: "1px" }}></div>
        <div className="px-3">Or</div>
        <div className="bg-info w-100" style={{ height: "1px" }}></div>
      </div>
      <div className="s-title text-center my-2 fs-4">Continue with using</div>
      <span className="text-danger text-center d-block">
        {error ? error.message : ""}
      </span>
      <div className="d-flex flex-column" style={{ gap: "20px" }}>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            type="button"
            className="d-flex fs-5 align-items-center justify-content-center  w-100 btn btn-danger"
            style={{ gap: "5px" }}
          >
            <FcGoogle />
            <span>Google</span>
          </button>
        </div>
        <div title="we are working on it">
          <button
            disabled={true}
            type="button"
            className="d-flex fs-5  align-items-center justify-content-center  w-100 btn btn-danger"
            style={{ gap: "5px" }}
          >
            <BsGithub />
            <span>Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Socialauth;
