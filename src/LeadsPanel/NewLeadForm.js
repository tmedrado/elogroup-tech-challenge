import React from "react";
import "./LeadsPanel.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Alert } from "react-bootstrap";
import Checkbox from "../Checkbox/Checkbox";
import validateNewLeadInfo from "./validateNewLeadInfo";
import { toast } from "react-toastify";

const NewLeadForm = ({ setShowNewLeadForm, setLeads, leads }) => {
  const [newLead, setNewLead] = React.useState({ step: 1 });
  const [projectTypes, setProjectTypes] = React.useState({
    projects: [
      { id: 1, value: "RPA", isChecked: false },
      { id: 2, value: "Produto Digital", isChecked: false },
      { id: 3, value: "Analytics", isChecked: false },
      { id: 4, value: "BPM", isChecked: false },
    ],
  });
  const [errors, setErrors] = React.useState({});
  const notify = () => toast.success("Lead Cadastrado Com Sucesso!🚀");

  const checkCheckboxes = () => {
    let checked = false;
    let projects = projectTypes.projects;
    projects.forEach((project) => {
      if (project.isChecked === true) {
        checked = true;
      }
    });
    return checked;
  };

  const handleAllChecked = (event) => {
    let projects = projectTypes.projects;
    projects.forEach((project) => (project.isChecked = event.target.checked));
    setProjectTypes({ projects: projects });
  };
  const handleCheckChieldElement = (event) => {
    let projects = projectTypes.projects;
    projects.forEach((project) => {
      if (project.value === event.target.value)
        project.isChecked = event.target.checked;
    });
    setProjectTypes({ projects: projects });
  };

  return (
    <div className="lead-form-container">
      <Row>
        <Col className="logo-div">
          <img src="logoElogroup.png" />
        </Col>
        <Col className="panel-and-leadsform-title ">
          <h3>Novo Lead</h3>
        </Col>
      </Row>
      <hr />
      <Row className="form-content">
        <Col>
          <div className="form-inputs">
            <label className="form-label">Nome *</label>
            <input
              className="form-input"
              placeholder="Coloque o nome"
              onChange={(event) =>
                setNewLead({ ...newLead, name: event.target.value })
              }
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Telefone *</label>
            <input
              className="form-input"
              type="text"
              name="telefone"
              placeholder="Coloque o telefone"
              onChange={(event) =>
                setNewLead({ ...newLead, tel: event.target.value })
              }
            />
            {errors.tel && <p>{errors.tel}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email *</label>
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Coloque o email"
              onChange={(event) =>
                setNewLead({ ...newLead, email: event.target.value })
              }
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </Col>
        <Col>
          <div className="table-content">
            <h5>Oportunidades *</h5>

            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onClick={handleAllChecked}
                      value="checkedall"
                    />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {projectTypes.projects.map((project) => {
                  return (
                    <Checkbox
                      handleCheckChieldElement={handleCheckChieldElement}
                      {...project}
                    />
                  );
                })}
              </tbody>
            </Table>

            <Button
              onClick={() => {
                setErrors(validateNewLeadInfo(newLead));
                if (
                  (!Object.keys(validateNewLeadInfo(newLead)).length > 0) &
                  checkCheckboxes()
                ) {
                  setLeads(leads.concat(newLead));
                  setShowNewLeadForm(false);
                  notify();
                }
              }}
              variant="primary"
              size="lg"
              block
            >
              Salvar Novo Lead
            </Button>
          </div>
        </Col>
      </Row>
      <div className="form-content">
        <div className="side-form"></div>
      </div>
    </div>
  );
};

export default NewLeadForm;
