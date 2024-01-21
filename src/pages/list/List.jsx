import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";


const List = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <DataTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
