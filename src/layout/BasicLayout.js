import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
const BasicLayout = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
