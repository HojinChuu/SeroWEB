import React from "react";
import { Route } from "react-router-dom";
import SideBar from "../../components/admin/SideBar";
import Tasks from "../../components/admin/Tasks";
import Analysis from "../../components/admin/Analysis";
import Notices from "../../components/admin/Notices";

const AdminHomeScreen = ({ match }) => {
  return (
    <div className="row">
      <SideBar />
      <div className="col-md-10 m-auto col-lg-10">
        <div className="d-flex justify-content-center p-4 border-bottom">
          <h1>Tasks</h1>
        </div>
        <Route path={match.path + "/analysis"} component={Analysis} />
        <Route path={match.path + "/notices"} component={Notices} />
        <Route path={match.path} component={Tasks} exact />
      </div>
    </div>
  );
};

export default AdminHomeScreen;
