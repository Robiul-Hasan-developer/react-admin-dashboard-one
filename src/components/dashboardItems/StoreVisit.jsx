import React from "react";
import PieChart from "../pieChart/PieChart";
const StoreVisit = () => {
  
 

  return (
      <div className="dashboard-card widget-item">
        <div className="dashboard-card__header d-flex flex-wrap justify-content-between align-items-center">
          <span className="widget-item__title">Store Visit</span>
          <button
            type="button"
            className="btn btn-info bg-info border-0 text-info bg-opacity-10 btn-sm"
          >
            Export Report   
          </button>
        </div>
        <div className="dashboard-card__body">
          <div id="chart-container">
            <PieChart/>
          </div>
        </div>
      </div>
  );
};

export default StoreVisit;
