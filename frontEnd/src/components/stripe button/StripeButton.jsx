import React from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cart/action";

const StripeButton = ({ price }) => {
  const { cartItems } = useSelector(({ cartReducer }) => cartReducer);
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const history = useHistory();
  const publishKey =
    "pk_test_51JMw5eSBu4fDgDaaxZvhiG7ipxoQIjexvh5xiNbNoCdqosboFk0innCXEkb9XCcsOpzuTegkdpgyxi8ZRG3eBWtF004wNQrxB2";

  const onToken = (tokten) => {
    cartItems.forEach(async (data) => {
      await fetch(`api/order/create-order/${currentUser._id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
    alert("Payment Succesfull");

    dispatch(resetCart());
    history.push("/");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="FireEStore"
      image="/bluefire.png"
      billingAddress
      shippingAddress
      currency="INR"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeButton;
