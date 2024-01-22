import React from "react";
import "./ProfileCard.scss";
import ProfileAvatarImage from "../../assets/images/avatar1.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

import EditIcon from '@mui/icons-material/Edit';
import UserDetailsList from "../userDetails/UserDetailsList";
import SocialList from "../socialList/SocialList";

const ProfileCard = () => {
  return (
    <div className="dashboard-card widget-item position-relative">
            <Link to="/setting" className="profile-card__editIcon"> <EditIcon className="icon"/> </Link>
        <div className="profile-card">
            <div className="profile-card__thumb">
                <img src={ProfileAvatarImage} alt="Profile Avatar" />
            </div>
            <div className="profile-card__content">
                <h5 className="profile-card__name">John Doe</h5>
                <p className="profile-card__designation fs-14">Front End Web Developer</p>
                <span className="profile-card__location fs-14"> 
                    <LocationOnIcon className="icon"/> 
                    <span className="text">California, United States</span>
                </span>

            </div>
        </div>
        <div className="mt-4">
            <UserDetailsList/>
        </div>
        <div className="mt-4">
            <SocialList/>
        </div>
    </div>
  );
};

export default ProfileCard;
