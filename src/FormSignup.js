import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>ELOGROUP!!</h1>
        <div className="form-inputs">
          <label className="form-label">Usuário</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Coloque seu usuário"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Coloque seu password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirmação Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirme seu password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Já tem uma conta? Entre <a href="#">aqui</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
