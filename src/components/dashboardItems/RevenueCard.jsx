
import React from "react";
import { revenueContent } from "../../data/data";
import BarChart from './../barChart/BarChart';

const RevenueCard = () => {

  return (
    <div className="dashboard-card widget-item">
      <div className="dashboard-card__header d-flex flex-wrap justify-content-between align-items-center">
        <span className="widget-item__title">Total Revenue</span>
        <button
          type="button"
          className="btn btn-info bg-info border-0 text-info bg-opacity-10 btn-sm"
        >
          Export Report
        </button>
      </div>
      <div className="dashboard-card__body">
        <div className="revenue-item-wrapper">
          {revenueContent.map((revenueItem, index) => {
            return (
              <div className="revenue-item" key={index}>
                <h6 className="revenue-item__amount">
                  {" "}
                  {revenueItem.amount}{" "}
                </h6>
                <span className="revenue-item__text">{revenueItem.text}</span>
              </div>
            );
          })}
        </div>

        <div id="pie-chart">
          <BarChart/>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
  