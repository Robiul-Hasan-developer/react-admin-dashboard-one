import React, { useState } from "react";
import "./ProfileSetting.scss";
import profileAvatar from "../../assets/images/avatar1.jpg";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const ProfileSetting = () => {
    
  // Upload Profile Avatar Code Start
  const [newProfileAvatar, setNewProfileAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewProfileAvatar(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  // Upload Profile Avatar Code End

  return (
    <div className="profile-setting dashboard-card widget-item">
      <div className="profile-setting__thumb">
        {newProfileAvatar ? (
          <img src={newProfileAvatar} alt="Profile Image" />
        ) : (
          <img src={profileAvatar} alt="Profile Image" />
        )}
        <label htmlFor="uploadAvatar" className="profile-setting__uploadIcon">
          <CameraAltOutlinedIcon className="icon" />
        </label>
        <input
          type="file"
          hidden
          id="uploadAvatar"
          onChange={ handleAvatarChange }
        />
      </div>
      <div className="profile-setting__content">
        <h5 className="profile-setting__name">John Doe</h5>
        <span className="profile-setting__designation">
          Front End Web Developer
        </span>
      </div>
    </div>
  );
};

export default ProfileSetting;
