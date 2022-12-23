import React from "react";
import HighCharts from "../../components/Highcharts/highcharts";
import DashboardGraphSkeleton from "../../skeletons/DashboardGraphSkeleton";

function GraphCards({ dashboardData }) {
  return (
    <div className="container-fluid p-2">
      <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-xl-4 col-md-6 pl-3 pr-3">
          {/* Widget Linearea One*/}
          <div className="card card-shadow" id="widgetLineareaOne">
            {dashboardData.length !== 0 ? (
              <>
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800 py-10">
                      <i className="icon mdi mdi-account grey-600 font-size-24 vertical-align-bottom " />
                      Customers
                    </div>
                    <span className="grey-700 font-size-30">
                      {dashboardData.customers}
                    </span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50">
                    <HighCharts
                      colour="#7986CB"
                      dataset={[0, 10, 3, 4, 5, 10, 20, 5, 0]}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div style={{ height: "12.5rem" }} className="card-block p-0">
                <DashboardGraphSkeleton />
              </div>
            )}
          </div>
          {/* End Widget Linearea One */}
        </div>
        <div className="col-xl-4 col-md-6 pl-3 pr-3">
          {/* Widget Linearea Two */}
          <div className="card card-shadow" id="widgetLineareaTwo">
            {dashboardData.length !== 0 ? (
              <div className="card-block p-20 pt-10">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="grey-800  py-10">
                    <i className="icon mdi mdi-flash grey-600 font-size-24 vertical-align-bottom " />
                    Orders
                  </div>
                  <span className=" grey-700 font-size-30">
                    {dashboardData.numoforders}
                  </span>
                </div>
                <div className="mb-20 grey-800">
                  <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                  34.2% From this week
                </div>
                <div className="ct-chart h-50">
                  <HighCharts
                    colour="#FFD54F"
                    dataset={[0, 10, 3, 0, 5, 10, 20, 5, 0]}
                  />
                </div>
              </div>
            ) : (
              <div style={{ height: "12.5rem" }} className="card-block p-0">
                <DashboardGraphSkeleton />
              </div>
            )}
          </div>
          {/* End Widget Linearea Two */}
        </div>
        <div className="col-xl-4 col-md-6 pl-3 pr-3">
          {/* Widget Linearea Three */}
          <div className="card card-shadow" id="widgetLineareaThree">
            {dashboardData.length !== 0 ? (
              <div className="card-block p-20 pt-10">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="grey-800 py-10">
                    <i className="icon mdi mdi-chart-bar grey-600 font-size-24 vertical-align-bottom" />
                    Sales
                  </div>
                  <span className="grey-700 font-size-30">
                    ₹ {dashboardData.totalAmount}
                  </span>
                </div>
                <div className="mb-20 grey-800">
                  <i className="icon md-long-arrow-down red-500 font-size-16" />{" "}
                  15% From this yesterday
                </div>
                <div className="ct-chart h-50">
                  <HighCharts
                    colour="#4DD0E1"
                    dataset={[0, 10, 3, 4, 9, 30, 20, 5, 0]}
                  />
                </div>
              </div>
            ) : (
              <div style={{ height: "12.5rem" }} className="card-block p-0">
                <DashboardGraphSkeleton />
              </div>
            )}
          </div>
          {/* End Widget Linearea Three */}
        </div>
      </div>
    </div>
  );
}

export default GraphCards;
