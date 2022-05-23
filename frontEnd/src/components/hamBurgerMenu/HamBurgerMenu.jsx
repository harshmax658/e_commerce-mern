import React from "react";
import "./hamMenuStyle.scss";
const HamBurgerMenu = ({ click }) => {
  return (
    <>
      <div className="l">
        <div className={`ham  ${click ? "rot1" : "tran"}`}></div>
        {!click && <div className={`ham  delay`}></div>}
        <div className={`ham  ${click ? "rot2" : "tran"}`}></div>
      </div>
    </>
  );
};

export default HamBurgerMenu;
