import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div
        className=" d-flex justify-content-center align-items-center w-50 mx-auto"
        style={{ height: "100vh" }}
      >
        <div className="content text-center">
          <div>
            <h1>404</h1>
          </div>
          <div>
            <p>
              Sometimes you try to visit a webpage but it doesn't exist, or it
              has been removed, or its URL has been changed; or you mistype its
              URL; or you click a link that has a mistyped URL; in those (and
              other) cases you get the 404 / Not Found error message
            </p>
          </div>
          <div>
            <button className="btn btn-danger text-light text-uppercase">
              Go back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
