import React from "react";
import "./formInput.scss";

export const FormInput = ({ onChange, label, ...otherProps }) => {
  return (
    <div className="formInput_group">
      <input className="form_input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form_input_label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
