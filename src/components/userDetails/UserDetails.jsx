import React from "react";
import "./UserDetails.scss";
import UserThumb from "../../assets/images/avatar1.jpg";
import { userDetails } from "../../data/data";
import UserDetailsList from "./UserDetailsList";

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="user-details__thumb">
        <img src={UserThumb} alt="" />
      </div>
      <div className="user-details__content">
        <h5 className="user-details__name">John Doe</h5>
        <UserDetailsList/>
      </div>
    </div>
  );
};

export default UserDetails;
