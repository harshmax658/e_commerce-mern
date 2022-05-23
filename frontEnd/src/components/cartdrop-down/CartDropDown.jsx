import React from "react";
import "./cartDropDown.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "./cartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useHistory } from "react-router-dom";
import { toogleCardHandle } from "../../redux/cart/action";

const CartDropDown = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  return (
    <div className="cart_dropDown">
      {cartItems.length > 0 ? (
        <>
          <div className="cart_items">
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              {cartItems.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </Scrollbars>
          </div>
          <CustomButton
            onClick={() => {
              history.push("/checkout");
              dispatch(toogleCardHandle());
            }}
          >
            GO TO CHECK OUT
          </CustomButton>
        </>
      ) : (
        <div className="message">
          <span>Your cart is empty now</span>
        </div>
      )}
    </div>
  );
};

export default CartDropDown;
