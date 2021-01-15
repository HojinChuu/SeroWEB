import React from "react";
import { Container } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-6 col-xs-12">{children}</div>
      </div>
    </Container>
  );
};

export default FormContainer;
