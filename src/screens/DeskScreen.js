import React, { Fragment } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Notices from "../components/desk/Notices";
import FAQs from "../components/desk/FAQs";
import QAs from "../components/desk/QAs";
import QACreateForm from "../components/desk/QACreateForm";
import NoticeDetails from "../components/desk/NoticeDetails";
import QADetails from "../components/desk/QADetails";

const DeskScreen = ({ match }) => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <Fragment>
      <Container
        style={width > 600 ? { marginTop: "140px" } : { marginTop: "20px" }}
      >
        <div
          className="row justify-content-end deskBtn"
          style={width > 600 ? {} : { marginBottom: "20px" }}
        >
          <Link to="/desk">
            <button
              className="btn"
              style={
                location.pathname === "/desk" ? activeColor : inActiveColor
              }
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

        <Route path="/desk/qa/create" component={QACreateForm} exact />
        <Route path="/desk/qa/detail/:id" component={QADetails} exact />
        <Route path="/desk/notice/:id" component={NoticeDetails} exact />
        <Route path={match.path + "/faq"} component={FAQs} exact />
        <Route path={match.path + "/qa"} component={QAs} exact />
        <Route path={match.path} component={Notices} exact />
      </Container>
    </Fragment>
  );
};

const spanStyle = {
  borderBottom: "3px solid #ffc165",
  paddingBottom: "3px",
};

const activeColor = { color: "#404040" };
const inActiveColor = { color: "#a2a2a2" };

export default DeskScreen;
