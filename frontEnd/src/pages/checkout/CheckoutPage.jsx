import React, { useState } from "react";
import "./checkOutPage.scss";
import "./checkOutPage.css";
import CheckOutItem from "../../components/checkoutitem/CheckOutItem";
import StripeButton from "../../components/stripe button/StripeButton";
import { useSelector } from "react-redux";
import CustomeButton from "../../components/custom-button/CustomButton";
import { useHistory } from "react-router-dom";

import {
  CheckOutPageStyle,
  CheckOutHeaderStyle,
  HeaderBlock,
  CardDemo,
  Total,
} from "./CheckoutPageStyle";
import CustomButton from "../../components/custom-button/CustomButton";
const CheckoutPage = () => {
  const [Order, setOrder] = useState(false);
  const history = useHistory();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const state = useSelector((state) => state.cartReducer);
  const { cartItems } = state;
  const totalPrice = () => {
    return cartItems.length
      ? cartItems.reduce((total, item) => {
          return (total += item.quantity * item.price);
        }, 0)
      : 0;
  };

  return (
    <CheckOutPageStyle>
      <CheckOutHeaderStyle>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeaderStyle>
      {cartItems.map((item) => {
        return <CheckOutItem item={item} key={item.id} />;
      })}

      {cartItems.length ? (
        <Total>
          <>
            {!currentUser && (
              <CustomeButton onClick={() => history.push("/signin")}>
                Login
              </CustomeButton>
            )}
            {currentUser && (
              <CustomButton onClick={() => setOrder(true)}>
                Order Now
              </CustomButton>
            )}
            {currentUser && Order && (
              <StripeButton setOrder={setOrder} price={totalPrice()} />
            )}
            TOTAL: ₹{totalPrice()}
          </>
        </Total>
      ) : (
        <div className="center">oops!! you don't have any item</div>
      )}

      <CardDemo>
        <h2>Use this for payment</h2>
        <br />
        <div>4242424242424242 Visa Any 3 digits and Any future date </div>
        <br />
        <div>
          4000056655665556 Visa(debit) Any 3 digits and Any future date{" "}
        </div>
        <br />
        <div>5555555555554444 Mastercard Any 3digits and Any future date</div>
      </CardDemo>
    </CheckOutPageStyle>
  );
};

export default CheckoutPage;
