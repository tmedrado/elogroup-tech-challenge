import React from "react";
import "./GridSystem.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const NewLeadForm = () => {
  return (
    <div className="lead-form-container">
      <div>
        <h3>New Lead</h3>
      </div>
      <div className="form-content">
        <div className="form-inputs">
          <label className="form-label">Nome *</label>
          <input
            className="form-input"
            type="text"
            name="nome"
            placeholder="Coloque o nome"
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Telefone *</label>
          <input
            className="form-input"
            type="text"
            name="telefone"
            placeholder="Coloque o telefone"
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Email *</label>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Coloque o email"
          />
        </div>
        <div className="side-form"></div>
        <div className="table-content">
          <h5>Oportunidades *</h5>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>RPA</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Produto Digital</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Analytics</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>BPM</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default NewLeadForm;
