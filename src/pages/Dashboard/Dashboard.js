import React, { useState, useEffect } from "react";
import axios from "axios";
import GraphCards from "./GraphCards";

const Dashboard = () => {
  const [trigger, setTrigger] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get("/admin/dashboard");
      setDashboardData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [trigger]);

  return (
    <div>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <GraphCards dashboardData={dashboardData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
