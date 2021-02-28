import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              <span className="space">엽서업무</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/questions">
              <span className="space">문의사항</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/notices">
              <span className="space"></span>
              공지사항
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/analysis">
              <span className="space">통계/분석</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
