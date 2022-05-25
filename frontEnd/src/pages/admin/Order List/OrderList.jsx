import React, { useEffect, useState } from "react";
import CheckOutItem from "../../../components/checkoutitem/CheckOutItem";
import { CheckOutPageStyle, CheckOutHeaderStyle, HeaderBlock } from "./order";

const OrderList = () => {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    const getOrderData = async () => {
      const fetchData = await fetch("api/order/get-order-data");
      if (fetchData.status === 200) {
        const jData = await fetchData.json();
        setOrder(jData.data);
      }
    };
    getOrderData();
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
            <span>Order By</span>
          </HeaderBlock>
        </CheckOutHeaderStyle>
        {orders.map((item) => {
          return (
            <CheckOutItem
              item={item}
              key={item?._id}
              admin={true}
              order={true}
            />
          );
        })}
      </CheckOutPageStyle>
    </div>
  );
};

export default OrderList;
