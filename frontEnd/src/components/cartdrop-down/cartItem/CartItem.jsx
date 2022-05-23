import React from "react";
import "./cartItem.scss";

const CartItem = ({ item }) => {
  const { image, name, price, quantity } = item;
  return (
    <div className="cart_item">
      <img src={`uploads/images/${image}`} alt="item" />
      <div className="item_details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ₹{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
