import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { Link, NavLink } from "react-router-dom";    

const UserInfo = () => {
    return (
        <div className="user-info-dropdown">
            <span className="user-info-dropdown__text">Welcome John Doe!</span>
            <ul className="user-info-dropdown__list">
                <li className="user-info-dropdown__item">
                    <NavLink to="/profile" className="user-info-dropdown__link"><AccountCircleOutlinedIcon className='icon'/> Profile</NavLink>
                </li>
                <li className="user-info-dropdown__item">
                    <NavLink to="/setting" className="user-info-dropdown__link"><SettingsOutlinedIcon className='icon'/> Setting</NavLink>
                </li>
                <li className="user-info-dropdown__item">
                    <NavLink to="/logout" className="user-info-dropdown__link"><LogoutOutlinedIcon className='icon'/> Logout</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default UserInfo;