import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import NewLeadForm from "./NewLeadForm";
import "./LeadsPanel.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LeadsPanel = () => {
  const [showNewLeadForm, setShowNewLeadForm] = React.useState(false);
  const [leads, setLeads] = React.useState([]);

  return (
    <>
      <Container>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {showNewLeadForm ? (
          <NewLeadForm
            setShowNewLeadForm={setShowNewLeadForm}
            setLeads={setLeads}
            leads={leads}
          />
        ) : (
          <>
            <Row>
              <Col>
                <div className="logo-div">
                  <img src="logoElogroup.png" />
                </div>
              </Col>
              <Col className="panel-and-leadsform-title ">
                <h3>Painel de Leads</h3>
              </Col>
            </Row>

            <hr />

            <Button
              id="button"
              onClick={() => setShowNewLeadForm(true)}
              variant="primary"
            >
              {" "}
              Novo Lead (+)
            </Button>

            <Table striped bordered size="lg">
              <thead>
                <tr>
                  <th>Cliente em Potencial</th>
                  <th>Dados Confirmados</th>
                  <th>Reunião Agendada</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.name}
                    onClick={() =>
                      setLeads(
                        leads.map((item) =>
                          item.name === lead.name
                            ? { ...item, step: Math.min(item.step + 1, 3) }
                            : item
                        )
                      )
                    }
                  >
                    <td>{lead.step === 1 && lead.name}</td>
                    <td>{lead.step === 2 && lead.name}</td>
                    <td>{lead.step === 3 && lead.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  );
};

export default LeadsPanel;
