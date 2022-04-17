import React from "react";
import "./FormBody.css";

const FormBody = ({ children, action }) => {
  return (
    <form
      onSubmit={action}
      className="form-body mx-auto my-5 container p-5 d-flex flex-column"
    >
      {children}
    </form>
  );
};

export default FormBody;
