import React from "react";

import PieChart from './../pieChart/PieChart';
import LineChart from './../lineChart/LineChart';
import RadarChart from './../radarChart/RadarChart';
import BarChart from "../barChart/BarChart";

const ChartCard = ({title, chartType}) => {

    const getChartType = () => {
        switch(chartType) {
            case "bar": 
                return <BarChart/>
            case "pie": 
                return <PieChart/>
            case "line": 
                return <LineChart/>
            case "radar": 
                return <RadarChart/>
            default:
                return null;
        }
    }
    
  return (
    <div className="dashboard-card widget-item">
      <div className="dashboard-card__header d-flex flex-wrap justify-content-between align-items-center">
        <span className="widget-item__title text--heading fw-bolder">{title}</span>
      </div>
      <div className="dashboard-card__body">
        <div id="chart-container">
          { getChartType() }
        </div>
      </div>
    </div>
  );
};

  
export default ChartCard;
