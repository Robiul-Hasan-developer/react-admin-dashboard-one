
import React, { useState } from "react";
import "./navbar.scss";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import SearchBox from "../searchBox/SearchBox";
import Notification from "../notification/Notification";
import userImage from "../../assets/images/avatar1.jpg";
import UserInfo from "../userInfo/UserInfo";

const Navbar = () => {

    // Notification Start
    const [notification, setNotification] = useState(false); 

    const handleClickNotification = () => {
        setNotification(!notification)
    }

    document.addEventListener('click', (event) => {
        if (
            event.target.closest('.action-item__button') === null && 
            event.target.closest('.notification-dropdown') === null  
        ) {
            setNotification(false)
        }
    }); 
    // Notification End 

    // User Info Start
    const [userInfo, setUserInfo] = useState(false);

    const handleClickUserInfo = () => {
        setUserInfo(!userInfo)
    }
    document.addEventListener('click', (event) => {
        if (
            event.target.closest('.user-info') === null && 
            event.target.closest('.user-info-dropdown') === null  
        ) {
            setUserInfo(false)
        }
    }); 
    // User Info End 

    // Light Dark Code Start
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleDarkModeBtn = () => {
        setIsDarkMode(!isDarkMode); 
        document.body.classList.toggle('darkVersion')
    }
    // Light Dark Code End

    // Sidebar From Left Side Code Start
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const toggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar); 
        document.body.classList.toggle('sidebarActive')
    }
    // Sidebar From Left Side Code End

    // Toggle Search Code Start
    const [toggleSearch, setToggleSearch] = useState(false); 

    const handleToggleSearch = () => {
        setToggleSearch(!toggleSearch); 
    }

    document.addEventListener('click', (event) => {
        if (
            event.target.closest('.toggle-search') === null && 
            event.target.closest('.search-box-wrapper') === null  
        ) {
            setToggleSearch(false)
        }
    }); 
    
    // Toggle Search Code End

  return (
    <div className="header-navbar d-flex flex-wrap justify-content-between align-items-center">
      <div className="header-navbar__left">
        <div className="d-lg-block d-none">
            <SearchBox/>
        </div>
        <button type="button" onClick={toggleSidebar} className="sidebar__icon d-lg-none d-block">
            <MenuOutlinedIcon/>
        </button>
      </div>
      <div className="header-navbar__right d-flex flex-align gap-1">
        <div className="action-item d-lg-none">
            <button type="button" className="action-item__button toggle-search" onClick={handleToggleSearch}>
                <SearchOutlinedIcon className="icon" />
            </button>
            {
                toggleSearch && <div className="d-lg-none d-block search-box-wrapper">
                    <SearchBox/>
                </div>
            }
        </div>
        <div className="action-item">
            <button type="button" className="action-item__button" onClick={handleDarkModeBtn} id="lightDarkBtn">
                <DarkModeOutlinedIcon className="icon" />
            </button>
        </div>
        <div className="action-item">
            <button type="button" className="action-item__button">
                <FullscreenOutlinedIcon className="icon" />
            </button>
        </div>
        <div className="action-item">
            <button type="button" className={`action-item__button ${notification ? 'base-soft text-base' : ''}`} onClick={handleClickNotification}>
                <NotificationsNoneRoundedIcon className={`icon ${notification ? 'text-base' : ''}`} />
                <span className="notification-badge bg-info">9</span>
            </button>
            {
                notification && <Notification/>
            }
        </div>
        <div className="action-item">
            <button type="button" className={`user-info p-0 rounded-circle ${userInfo ? 'bordered' : ''}`} onClick={handleClickUserInfo}>
                <img src={userImage} className="user-info__thumb" alt="" />
            </button>
            {
                userInfo && <UserInfo/>
            }
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
