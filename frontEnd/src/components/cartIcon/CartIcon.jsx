import React from "react";
import "./cartIcons.scss";
import { FaOpencart } from "react-icons/fa";

const CartIcon = ({ totalCartItem, ...otherProps }) => {
  return (
    <div className="cart_icon" {...otherProps}>
      <FaOpencart className="icon" />
      {totalCartItem ? (
        <span className="item_count">{totalCartItem}</span>
      ) : null}
    </div>
  );
};

export default CartIcon;
