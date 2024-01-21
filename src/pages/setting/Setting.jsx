import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Setting = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
              <h1>Setting Page</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
