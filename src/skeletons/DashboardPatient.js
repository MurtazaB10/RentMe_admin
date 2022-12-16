import React from "react";
import "./Skeleton.css";
import Skimmer from "./Skimmer";

function DashboardPatient() {
  return (
    <div className="skeleton-wrapper">
      <Skimmer />
      <div className="d-flex align-items-center">
        <div className="skeleton avatar avatar2"></div>
        <div className="skeleton text w-50"></div>
      </div>
    </div>
  );
}

export default DashboardPatient;