import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileCard from "../../components/profileComponent/ProfileCard";
import PopularPost from './../../components/profileComponent/PopularPost';

const Profile = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
              <div className="row gy-4">
                <div className="col-md-6">
                  <ProfileCard/>
                </div>
                <div className="col-md-6">
                  <PopularPost/>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
