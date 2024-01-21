import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import RevenueCard from "../../components/dashboardItems/RevenueCard";
import UserDetails from "../../components/userDetails/UserDetails";
import DataTable from "../../components/dataTable/DataTable";

const Single = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
              <div className="row gy-4">
                <div className="col-lg-4">
                    <UserDetails/>
                </div>
                <div className="col-lg-8">
                    <RevenueCard/>
                </div>
                <div className="col-lg-12">
                    <DataTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
