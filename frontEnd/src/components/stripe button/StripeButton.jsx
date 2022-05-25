import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cart/action";
import BackDrop from "../Payment/BackDrop";
import { Form } from "../BackDrop/backDropStyle";

import { ImLocation, ImAddressBook } from "react-icons/im";
import { GiEarthAmerica } from "react-icons/gi";
import { FaCity } from "react-icons/fa";

const sendOrder = async (cartItems, currentUser) => {};

const Address = ({ component, Add, formHandler }) => {
  const { address, postcode, city } = Add;

  return (
    <Form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <ImAddressBook />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          aria-label="Address"
          aria-describedby="basic-addon1"
          onChange={formHandler}
          name="address"
          value={address}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <ImLocation />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Postcode"
          aria-label="Postcode"
          aria-describedby="basic-addon1"
          onChange={formHandler}
          name="postcode"
          value={postcode}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <FaCity />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
          onChange={formHandler}
          name="city"
          value={city}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <GiEarthAmerica />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Country"
          aria-label="Country"
          value={"India"}
          disabled={true}
          aria-describedby="basic-addon1"
        />
      </div>
      {component}
    </Form>
  );
};
const StripeButton = ({ price, setOrder }) => {
  const [Add, setAdd] = useState({
    address: "",
    postcode: "",
    city: "",
    country: "India",
  });
  const { cartItems } = useSelector(({ cartReducer }) => cartReducer);
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const history = useHistory();
  const publishKey =
    "pk_test_51JMw5eSBu4fDgDaaxZvhiG7ipxoQIjexvh5xiNbNoCdqosboFk0innCXEkb9XCcsOpzuTegkdpgyxi8ZRG3eBWtF004wNQrxB2";

  const formHandler = (e) => {
    setAdd((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onToken = (tokten) => {
    cartItems.forEach(async (data) => {
      data = { ...data, ...Add };
      console.log("data");
      console.log(data);
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
  console.log(cartItems);
  return (
    <BackDrop
      closeBtn={setOrder}
      component={
        <Address
          Add={Add}
          formHandler={formHandler}
          component={
            <StripeCheckout
              label="Pay Now"
              name="FireEStore"
              image="/bluefire.png"
              currency="INR"
              description={`Your total is ₹${price}`}
              amount={priceForStripe}
              panelLabel="Pay Now"
              token={onToken}
              stripeKey={publishKey}
            />
          }
        />
      }
    />
  );
};

export default StripeButton;
