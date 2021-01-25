import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import SideBar from "../components/admin/SideBar";
import Tasks from "../components/admin/Tasks";
import Analysis from "../components/admin/Analysis";
import Notices from "../components/admin/Notices";
import Questions from "../components/admin/Questions";

const AdminHomeScreen = ({ match, location, history }) => {
  const [title, setTitle] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    location.pathname.slice(7) === ""
      ? setTitle("TASKS")
      : setTitle(location.pathname.slice(7).toUpperCase());
  }, [location.pathname]);

  useEffect(() => {
    if (typeof userInfo == undefined || !userInfo || userInfo.usGrant !== 1) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div className="row">
      <SideBar />
      <div className="col-md-10 m-auto col-lg-10">
        <div className="d-flex justify-content-center p-4 border-bottom">
          <h1>{title}</h1>
        </div>
        <Route path={match.path + "/questions"} component={Questions} exact />
        <Route path={match.path + "/analysis"} component={Analysis} exact />
        <Route path={match.path + "/notices"} component={Notices} exact />
        <Route path={match.path} component={Tasks} exact />
      </div>
    </div>
  );
};

export default AdminHomeScreen;