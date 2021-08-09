import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import SideBar from "../components/admin/SideBar";
import Tasks from "../components/admin/Tasks";
import Logs from "../components/admin/Logs";
import Dashboard from "../components/admin/Dashboard";
import Notices from "../components/admin/Notices";
import Questions from "../components/admin/Questions";
import NoticeCreateForm from "../components/admin/NoticeCreateForm";

const AdminHomeScreen = ({ match, location, history }) => {
  const [title, setTitle] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    location.pathname.slice(7) === ""
      ? setTitle("DashBoard")
      : setTitle(location.pathname.slice(7).toUpperCase());
  }, [location]);

  useEffect(() => {
    if (
      (!userInfo && !localStorage.getItem("userToken")) ||
      (userInfo && userInfo.usGrant !== 1)
    ) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <Container>
      <div className="row">
        <SideBar />
        <div className="col-md-10 m-auto col-lg-10">
          <div className="d-flex justify-content-center p-4 border-bottom">
            <h1>{title}</h1>
          </div>
          <Route
            path={match.path + "/notices/create"}
            component={NoticeCreateForm}
            exact
          />
          <Route path={match.path + "/questions"} component={Questions} exact />
          <Route path={match.path + "/logs"} component={Logs} exact />
          <Route path={match.path + "/tasks"} component={Tasks} exact />
          <Route path={match.path + "/notices"} component={Notices} exact />
          <Route path={match.path} component={Dashboard} exact />
        </div>
      </div>
    </Container>
  );
};

export default AdminHomeScreen;
