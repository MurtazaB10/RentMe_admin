import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

function HighCharts(props) {
    const {colour,dataset}=props;
  const areaChart1 = {
    chart: {
      type: "areaspline",
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },

    xAxis: {
      lineColor: "#fff",
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      lineColor: "#fff",
      gridLineColor: "#fff",
      labels: {
        enabled: false,
      },
    },
    tooltip: {},

    plotOptions: {
      areaspline: {
        fillOpacity: 1,
        color: colour,
      },
    },
    series: [
      {
        name: "Customers",
        data: dataset,
        marker: {
          enabled: false,
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        classNmae="area-chart"
        highcharts={Highcharts}
        options={areaChart1}
      />
    </div>
  );
}

export default HighCharts;
