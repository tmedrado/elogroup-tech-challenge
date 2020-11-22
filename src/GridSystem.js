import React from "react";
import Table from "react-bootstrap/Table";
import "./GridSystem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GridSystem = () => {
  return (
    <div className="grid-container">
      <div>
        <h3>Painel de Leads</h3>
        <hr></hr>
        <button> Novo Lead</button>
        <p></p>
        <Table striped bordered size="lg">
          <thead>
            <tr>
              <th>Cliente em Potencial</th>
              <th>Dados Confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coca-Cola</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default GridSystem;
