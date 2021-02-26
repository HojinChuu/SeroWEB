import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FAQItem = ({ faq, index }) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={index + 1}
        className="pt-3 pb-3"
      >
        <span style={spanStyle}>Q.</span> {faq.faTitle}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index + 1}>
        <Card.Body className="mt-2">
          <div className="ml-1" style={{ height: "200px" }}>
            <span style={spanStyle}>A.</span>
            {faq.faContent}
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const spanStyle = {
  fontWeight: "bold",
  marginRight: "10px",
  color: "#404040",
};

export default FAQItem;
