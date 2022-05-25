import React from "react";
import "./checkOutItem.scss";
import "./checkOutItem.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  removeItemFromCart,
  addItemInCart,
  decreaseQuantityOfItem,
  setCartTotal,
} from "../../redux/cart/action";
import { useDispatch } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CheckOutItem = ({ item, order, admin }) => {
  const {
    image,
    name,
    price,
    quantity,
    _id,
    user,
    address,
    postcode,
    city,
    country,
  } = item;
  console.log(item);

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeItemFromCart(_id));
    dispatch(setCartTotal());
  };
  return (
    <>
      <div className={`checkout_item ${order && "checkout_item2"} `}>
        <div
          className={`image_container ${order && "image_container2"} ${
            admin && "image_container3"
          }`}
        >
          <img src={`uploads/images/${image}`} alt="" />
        </div>
        <span
          className={`${!admin && "name"} `}
          id={`${admin && "name2"}`}
          style={admin && { width: "10%" }}
        >
          {name}
        </span>
        <div className={`${!admin && "quantity"}  ${admin && "quantity2"}`}>
          {!order && (
            <button
              className="incDecButton"
              onClick={() => {
                dispatch(decreaseQuantityOfItem(_id));
                dispatch(setCartTotal());
              }}
            >
              <IoIosArrowBack />
            </button>
          )}
          <span>{quantity}</span>
          {!order && (
            <button
              className="incDecButton"
              onClick={() => {
                console.log(item);
                dispatch(addItemInCart(item));
                // dispatch(setCartTotal());
              }}
            >
              <IoIosArrowForward />
            </button>
          )}
        </div>

        {!admin ? (
          <span className={`price  ${order && "price2"}`}>
            ₹{quantity * price}
          </span>
        ) : (
          <span className={`${!admin && "price"}  ${order && "price2"}`}>
            ₹{price}
          </span>
        )}
        <span className="remove_button">
          {!order ? (
            <button onClick={removeHandler}>
              <RiDeleteBin5Line />
            </button>
          ) : admin ? (
            <p className="text-primary">{user?.email}</p>
          ) : (
            <p className="text-primary">dispatch</p>
          )}
        </span>
      </div>
      {admin && (
        <div className="address">
          <div className="message1">Address</div>
          <div className="address_data">{`${address} ,${postcode} ,${city} ,${country}`}</div>
        </div>
      )}
    </>
  );
};

export default CheckOutItem;
