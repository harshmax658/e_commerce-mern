import React from "react";
import "./customButton.scss";
import { CustomButtonStyle } from "./customButtonStyle";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonStyle {...props}>{children}</CustomButtonStyle>;
};

export default CustomButton;
