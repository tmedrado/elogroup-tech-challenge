import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import LeadsPanel from "../LeadsPanel/LeadsPanel";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {!isSubmitted ? (
        <div className="form-container">
          <span className="close-btn">×</span>
          <FormSignup submitForm={() => setIsSubmitted(true)} />
        </div>
      ) : (
        <LeadsPanel />
      )}
    </>
  );
};

export default Form;
