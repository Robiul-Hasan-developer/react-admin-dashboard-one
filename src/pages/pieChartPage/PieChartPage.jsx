import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ChartCard from "../../components/chartCard/ChartCard";

const PieChartPage = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <ChartCard title="Pie Chart" chartType='pie' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartPage;
