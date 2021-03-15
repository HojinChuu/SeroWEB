import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

const RegisterAgreeModal = ({ show, onHide }) => {
  return (
    <Modal centered show={show} onHide={onHide} keyboard={false}>
      <Modal.Header closeButton>
        <span className="pl-2 mt-1">개인정보처리방침</span>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center cardContainer">
          <Col>
            <div className="embed-responsive embed-responsive-1by1">
              <iframe
                title="개인정보처리방침"
                className="embed-responsive-item"
                src="https://seropost.com/privacy.html"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterAgreeModal;
