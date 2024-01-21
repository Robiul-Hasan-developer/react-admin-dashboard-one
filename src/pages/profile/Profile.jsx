import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
    return (
         <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
              <h1>Profile Page</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;