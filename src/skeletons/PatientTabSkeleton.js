import React from "react";
import "./Skeleton.css";
import Skimmer from "./Skimmer";

function PatientTabSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <Skimmer />
      <div className="skeleton-feilds">
        <div className="skeleton graph"></div>
        {[1,2,3,4].map((idx)=>{return  <div className="skeleton text"></div>})}
       
      </div>
    </div>
  );
}

export default PatientTabSkeleton;
