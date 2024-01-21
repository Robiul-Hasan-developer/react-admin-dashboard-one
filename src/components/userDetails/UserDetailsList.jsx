import React from "react";
import { userDetails } from "../../data/data";

const UserDetailsList = () => {
  return (
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
  );
};

export default UserDetailsList;
