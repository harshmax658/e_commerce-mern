import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CheckOutItem from "../../components/checkoutitem/CheckOutItem";

import { CheckOutPageStyle, CheckOutHeaderStyle, HeaderBlock } from "./order";

const Orders = () => {
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrderData = async () => {
      const data = await fetch(`api/order/get-order-data/${currentUser._id}`);
      if (data.status === 200) {
        const jsonData = await data.json();
        setOrders(jsonData.data);
      }
    };
    getOrderData();
  }, []);
  useEffect(() => {
    if (!currentUser) history.push("/");
  }, []);
  return (
    <div>
      <CheckOutPageStyle>
        <CheckOutHeaderStyle>
          <HeaderBlock>
            <span>Image</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Name</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Total price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Status</span>
          </HeaderBlock>
        </CheckOutHeaderStyle>
        {orders.map((item) => {
          return <CheckOutItem item={item} key={item?._id} order={true} />;
        })}
      </CheckOutPageStyle>
    </div>
  );
};

export default Orders;
