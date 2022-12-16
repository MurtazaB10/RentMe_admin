import React from "react";
import "./Skeleton.css";
import Skimmer from "./Skimmer";

function DashboardPatientList() {
  return (
    <div className="skeleton-wrapper py-0">
      <Skimmer />
      <div className="d-flex align-items-center">
        <div className="skeleton avatar"></div>
        <div className="skeleton text w-50"></div>
      </div>
    </div>
  );
}

export default DashboardPatientList;