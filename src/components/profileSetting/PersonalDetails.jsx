import React, { useState } from "react";
import Input from "../input/Input";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/profile");
    }

  return (
    <div className="profile-setting dashboard-card widget-item">
      <div className="dashboard-card__header text-start">
        <span className="widget-item__title text--heading fw-bolder">
          Personal Details
        </span>
      </div>
      <div className="dashboard-card__body">
        <form onSubmit={handleSubmit}>
          <div className="row gy-4">
            <div className="col-sm-6">
              <Input inputType="text" inputPlaceholder="John" labelText="First Name" />
            </div>
            <div className="col-sm-6">
                <Input inputType="text" inputPlaceholder="Doe" labelText="Last Name" />
            </div>
            <div className="col-sm-6">
                <Input inputType="text" inputPlaceholder="+123456789" labelText="Phone Number" />
            </div>
            <div className="col-sm-6">
                <Input inputType="email" inputPlaceholder="johndoe@gmail.com" labelText="Email Address" />
            </div>
            <div className="col-sm-6">
                <Input inputType="date" inputPlaceholder="21/01/2024" labelText="Joining Date" />
            </div>
            <div className="col-sm-6">
                <Input inputType="text" inputPlaceholder="Front End Web Developer" labelText="Designation" />
            </div>
            <div className="col-sm-6">
                <Input inputType="url" inputPlaceholder="www.facebook.com" labelText="Website" />
            </div>
            <div className="col-sm-6">
                <Input inputType="text" inputPlaceholder="United States of America" labelText="Country" />
            </div>
            <div className="col-lg-12">
                <Input inputType="number" inputPlaceholder="54321" labelText="Zip Code" />
            </div>
            <div className="col-lg-12">
                <label className="text-start d-block fw-semibold mb-1 fs-14">Description</label>
                <textarea className="form-control"></textarea>
            </div>
            <div className="col-lg-12">
                <div className="d-flex align-items-center gap-2">
                    <button type="submit" className="btn btn-primary">Update</button>   
                    <button type="reset" className="btn btn-primary">Reset</button>   
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
