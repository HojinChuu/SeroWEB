import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Notices from "../components/desk/Notices";
import FAQs from "../components/desk/FAQs";
import QAs from "../components/desk/QAs";

const DeskScreen = ({ match }) => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <Container
      style={width > 600 ? { marginTop: "140px" } : { marginTop: "50px" }}
    >
      <div className="row justify-content-end deskBtn">
        <Link to="/desk">
          <button
            className="btn"
            style={location.pathname === "/desk" ? activeColor : inActiveColor}
          >
            <span style={location.pathname === "/desk" ? spanStyle : {}}>
              NOTICE
            </span>
          </button>
        </Link>
        <Link to="/desk/faq">
          <button
            className="btn"
            style={
              location.pathname === "/desk/faq" ? activeColor : inActiveColor
            }
          >
            <span style={location.pathname === "/desk/faq" ? spanStyle : {}}>
              FAQ
            </span>
          </button>
        </Link>
        <Link to="/desk/qa">
          <button
            className="btn"
            style={
              location.pathname === "/desk/qa" ? activeColor : inActiveColor
            }
          >
            <span style={location.pathname === "/desk/qa" ? spanStyle : {}}>
              Q&A
            </span>
          </button>
        </Link>
      </div>
      <Route path={match.path + "/faq"} component={FAQs} exact />
      <Route path={match.path + "/qa"} component={QAs} exact />
      <Route path={match.path} component={Notices} exact />
    </Container>
  );
};

const spanStyle = {
  borderBottom: "3px solid #ffc165",
  paddingBottom: "3px",
};

const activeColor = { color: "#404040" };
const inActiveColor = { color: "#a2a2a2" };

export default DeskScreen;
