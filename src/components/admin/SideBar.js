import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              <span className="space">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              <span className="space">Tasks</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/analysis">
              <span className="space">Analysis</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/notices">
              <span className="space"></span>
              Notices
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span className="space"></span>
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
