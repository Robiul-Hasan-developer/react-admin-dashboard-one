import React from "react";
import "./UserDetails.scss";
import UserThumb from "../../assets/images/avatar1.jpg";
import { userDetails } from "../../data/data";

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="user-details__thumb">
        <img src={UserThumb} alt="" />
      </div>
      <div className="user-details__content">
        <h5 className="user-details__name">John Doe</h5>
        <ul className="user-details__list">
          {userDetails.map((userDetailsItem, index) => {
            return (
              <li className="user-details__item" key={index}>
                <strong className="title"> {userDetailsItem.title}: </strong>
                <span className="desc"> {userDetailsItem.desc}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
