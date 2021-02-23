import React from "react";
import { Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Notices from "../components/desk/Notices";
import FAQs from "../components/desk/FAQs";
import QAs from "../components/desk/QAs";

const DeskScreen = ({ match }) => {
  const { width } = useWindowDimensions();

  return (
    <Container
      style={width > 600 ? { marginTop: "140px" } : { marginTop: "50px" }}
    >
      <div className="row justify-content-end deskBtn">
        <Link to="/desk">
          <button className="btn">NOTICE</button>
        </Link>
        <Link to="/desk/faq">
          <button className="btn">FAQ</button>
        </Link>
        <Link to="/desk/qa">
          <button className="btn">Q&A</button>
        </Link>
      </div>
      <Route path={match.path + "/faq"} component={FAQs} exact />
      <Route path={match.path + "/qa"} component={QAs} exact />
      <Route path={match.path} component={Notices} exact />
    </Container>
  );
};

export default DeskScreen;
