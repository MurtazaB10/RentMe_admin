import React, { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="Header">
      {/* partial:partials/_navbar.html */}
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="/">
            <img src="images/logo.png" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="/">
            <h1
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: 900,
                margin: 0,
              }}
            ></h1>
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu" style={{ display: "none" }} />
            <span className="mdi mdi-arrow-left" />
          </button>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                href="/"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-profile-img">
                  <img src="assets/images/faces/face1.jpg" alt="face1" />
                  <span className="availability-status online" />
                </div>
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a
                  className="dropdown-item"
                  href="/Login"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <i className="mdi mdi-power mr-2" /> Logout{" "}
                </a>
              </div>
            </li>
          </ul>

          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
      {/* partial */}
    </div>
  );
};

export default Header;
