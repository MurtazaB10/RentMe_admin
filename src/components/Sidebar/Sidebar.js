import React from "react";
import { NavLink } from "react-router-dom";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" exact to="/">
              <i className="mdi mdi-home menu-icon" />
              <span className="menu-title">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Productlist"
            >
              <i className="mdi mdi-package menu-icon" />
              <span className="menu-title">Product </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/order">
              <i className="mdi mdi-cash-multiple menu-icon" />
              <span className="menu-title">Order</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/feedback"
            >
              <RateReviewOutlinedIcon />
              <span className="menu-title">Feedback</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/query">
              <i className="fa-solid fa-clipboard-question" />
              <span className="menu-title">Query</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/Login" onClick={() => localStorage.clear()}>
              <i className="mdi mdi-power menu-icon" />
              <span className="menu-title">Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* partial */}
    </div>
  );
};

export default Sidebar;
