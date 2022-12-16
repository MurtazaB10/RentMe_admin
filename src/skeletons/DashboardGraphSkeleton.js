import React from "react";
import "./Skeleton.css";
import Skimmer from "./Skimmer";

function DashboardGraphSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <Skimmer />
      <div className="skeleton-feilds">
      <div className="skeleton graph"></div>
        <div className="skeleton text"></div>
        <div className="skeleton text"></div>
      </div>
    </div>
  );
}

export default DashboardGraphSkeleton;