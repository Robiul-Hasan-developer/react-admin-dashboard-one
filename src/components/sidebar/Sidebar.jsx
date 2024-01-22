import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { sideMenuItem } from "./../../data/data";

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Sidebar = () => {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const closeSidebar = () => {
      setIsOpenSidebar(false); 
      document.body.classList.remove('sidebarActive')
  }

  return (

    <>
    

      <div className="sidebar">
        <button type="button" className="sidebar__close d-lg-none" onClick={closeSidebar}> <ClearOutlinedIcon className="icon"/> </button>
        <div className="sidebar__logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />{" "}
          </Link>
        </div>
          <ul className="sidebar-menu">
            {sideMenuItem.map((menuItem, index) => (
              <li className="sidebar-menu__item" key={index}>
                {menuItem.title ? (
                  <span className="sidebar-menu__title">{menuItem.title}</span>
                  ) : (
                    <NavLink to={menuItem.path} className="sidebar-menu__link">
                    {menuItem.icon} {menuItem.text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
      </div>
    </>
  );
};

export default Sidebar;
