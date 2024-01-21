import React from "react";

const Input = ({ inputType, inputPlaceholder, labelText }) => {
    
  return (
    <>
        <label className="text-start d-block fw-semibold mb-1 fs-14">{labelText}</label>
        <input type={inputType} className="form-control" placeholder={inputPlaceholder} />
    </>
  );
};

export default Input;
