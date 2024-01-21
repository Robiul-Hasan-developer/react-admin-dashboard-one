import React from "react";

import "./home.scss";
import "./widget.scss";
import "./dashboardCard.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import WidgetItem from "../../components/dashboardItems/WidgetItem";
import RevenueCard from './../../components/dashboardItems/RevenueCard';
import StoreVisit from "../../components/dashboardItems/StoreVisit";
import TransactionTable from '../../components/dashboardItems/TransactionTable';

const Home = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
              <WidgetItem />
            </div>

            <div className="dashboard__item">
              <div className="row gy-4">
                  <div className="col-lg-6">
                    <RevenueCard/>
                  </div>
                  <div className="col-lg-6">
                    <StoreVisit/>
                  </div>
                  <div className="col-lg-12">
                    <TransactionTable/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
