import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
    const [pieChart, setPieChart] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: "donut",
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      });
    
  return (
    <ReactApexChart
      options={pieChart.options}
      series={pieChart.series}
      type="donut"
    />
  );
};

export default PieChart;
