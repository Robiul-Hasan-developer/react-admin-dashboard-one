
import React, { useState } from "react";
import "./navbar.scss";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";


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

    // Full Screen Code Start
    
    // Full Screen Code End


  return (
    <div className="header-navbar d-flex flex-wrap justify-content-between">
      <div className="header-navbar__left">
        <SearchBox/>
      </div>
      <div className="header-navbar__right d-flex flex-align gap-1">
        <div className="action-item">
            <button type="button" className="action-item__button">
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






// import React from "react";
// import "./navbar.scss";
// import Stack from "@mui/material/Stack";
// import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
// import { notificationItem } from "../../data/data";


// import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));

// const Navbar = () => {

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };


// // Notification State Start
//   const [anchorE1, setAnchorE1] = React.useState(null);

//   const handleNotificationClick = (event) => {
//     setAnchorE1(event.currentTarget);
//   };

//   const handleNotificationClose = () => {
//     setAnchorE1(null);
//   };
// // Notification State End
  
  

//   return (
//     <div className="header-navbar d-flex flex-wrap justify-content-between">
//       <div className="header-navbar__left">
//         <div className="search-box">
//             <span className="search-box__icon"> <SearchOutlinedIcon className="icon"/> </span>
//             <input type="search" className="form-control shadow-none" name="" id="" />
//         </div>
//       </div>
//       <div className="header-navbar__right">
//         <Stack direction="row" spacing={1}>
//           <IconButton>
//             <DarkModeOutlinedIcon />
//           </IconButton>

//           <IconButton>
//             <FullscreenOutlinedIcon />
//           </IconButton>

//         {/* Notification Dropdown menu Start */}
//           <IconButton onClick={handleNotificationClick}>
//             <StyledBadge
//               badgeContent={4}
//               color="secondary"
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//             >
//               <NotificationsNoneRoundedIcon />
//             </StyledBadge>
//           </IconButton>

//         <div className="notification-dropdown">
//             <div className="notification-dropdown__header">
//                 <h5 className="notification-dropdown__title">Notifications</h5>
//             </div>
//             <div className="notification-dropdown__body">
//                 {
//                     notificationItem.map((ntItem, index) => (
//                     <div className="notification-dropdown__item d-flex gap-3">
//                         <div className="notification-dropdown__thumb">
//                             <img src={ntItem.image} alt="" />
//                         </div>
//                         <div className="notification-dropdown__content">
//                             <h6 className="notification-dropdown__name"> {ntItem.name} <span className="notification-dropdown__desc">{ntItem.desc}</span> </h6>
//                             <span className="notification-dropdown__time">{ntItem.time}</span>
//                         </div>
//                     </div>
//                     ))
//                 }
//             </div>
//         </div>
//         {/* Notification Dropdown menu End */}

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               textAlign: "center",
//             }}
//           >
//             <Tooltip title="Account settings">
//               <IconButton
//                 onClick={handleClick}
//                 size="small"
//                 sx={{ ml: 2 }}
//                 aria-controls={open ? "account-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//               >
//                 <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//               </IconButton>
//             </Tooltip>
//           </Box>
//           <Menu
//             anchorEl={anchorEl}
//             id="account-menu"
//             open={open}
//             onClose={handleClose}
//             onClick={handleClose}
//             PaperProps={{
//               elevation: 0,
//               sx: {
//                 overflow: "visible",
//                 filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.15))",
//                 mt: 1.5,
//                 "& .MuiAvatar-root": {
//                   width: 32,
//                   height: 32,
//                   ml: -0.5,
//                   mr: 1,
//                 },
//                 "&::before": {
//                   content: '""',
//                   display: "block",
//                   position: "absolute",
//                   top: 0,
//                   right: 14,
//                   width: 10,
//                   height: 10,
//                   bgcolor: "background.paper",
//                   transform: "translateY(-50%) rotate(45deg)",
//                   zIndex: 0,
//                 },
//               },
//             }}
//             transformOrigin={{ horizontal: "right", vertical: "top" }}
//             anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//           >
//             <MenuItem onClick={handleClose}>
//               <Avatar /> Profile
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <Avatar /> My account
//             </MenuItem>
//             <Divider />
//             <MenuItem onClick={handleClose}>
//               <ListItemIcon>
//                 <PersonAdd fontSize="small" />
//               </ListItemIcon>
//               Add another account
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <ListItemIcon>
//                 <Settings fontSize="small" />
//               </ListItemIcon>
//               Settings
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <ListItemIcon>
//                 <Logout fontSize="small" />
//               </ListItemIcon>
//               Logout
//             </MenuItem>
//           </Menu>
//         </Stack>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
