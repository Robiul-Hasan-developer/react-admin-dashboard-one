import React from 'react';

import { NavLink } from "react-router-dom";    
import { userInfos } from '../../data/data';

const UserInfo = () => {
    return (
        <div className="user-info-dropdown">
            <span className="user-info-dropdown__text">Welcome John Doe!</span>
            <ul className="user-info-dropdown__list">
                {
                    userInfos.map((userInfo, index) => {
                        return (
                            <li className="user-info-dropdown__item" key={index}>
                            <NavLink to={userInfo.path} className="user-info-dropdown__link">
                            {userInfo.icon} {userInfo.text}
                            </NavLink>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default UserInfo;