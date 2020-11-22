import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import GridSystem from "../GridSystem";

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
        <GridSystem />
      )}
    </>
  );
};

export default Form;
