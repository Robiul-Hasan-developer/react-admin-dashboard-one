import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileSetting from "../../components/profileSetting/ProfileSetting";
import ProfileSettingPortfolio from "../../components/profileSetting/ProfileSettingPortfolio";
import PersonalDetails from './../../components/profileSetting/PersonalDetails';

const Setting = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__inner d-flex flex-wrap">
        <Sidebar />
        <div className="dashboard__body">
          <Navbar />
          <div className="dashboard__content">
            <div className="dashboard__item">
                <div className="row gy-4">
                  <div className="col-lg-4  col-md-6">
                    <ProfileSetting/>
                  </div>
                  <div className="col-lg-8  col-md-6">
                    <ProfileSettingPortfolio/>
                  </div>
                  <div className="col-lg-12">
                    <PersonalDetails/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
