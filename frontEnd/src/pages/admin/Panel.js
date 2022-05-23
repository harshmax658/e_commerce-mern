import React, { useEffect, useState } from "react";
import AddProduct from "./add product/AddProduct";
import { Header, Center, Left, Right, Main } from "./panelStyle";

import ProductListPanel from "./product list/ProductListPanel";
import { useHistory } from "react-router-dom";
import AllUsers from "./all users/AllUsers";
import MessageBox from "./MessageBox/MessageBox";
import OrderList from "./Order List/OrderList";

const Panel = () => {
  const adminId = "admin";
  const adminpass = "admin123";
  const history = useHistory();

  const [prompt, setPrompt] = useState(false);
  useEffect(() => {
    document.getElementById("body").style.padding = "0";
  }, []);
  const [menu, setMenu] = useState({
    ap: true,
    lp: false,
    au: false,
    mess: false,
    ro: false,
  });
  const { ap, lp, au, mess, ro } = menu;
  const menuHandler = (val) => {
    setMenu((prev) => {
      return { ap: false, lp: false, au: false, ...val };
    });
  };
  useEffect(() => {
    const id = window.prompt("enter id");
    const password = window.prompt("enter password");
    if (id === adminId && password === adminpass) {
      setPrompt(true);
    } else {
      alert("You can't access this");
      setPrompt(false);
      history.push("/");
    }
  }, []);

  const logout = () => {
    setPrompt(false);
    history.push("/");
  };
  return (
    <Main>
      {prompt && (
        <>
          <Header>Admin Panel</Header>
          <Center>
            <Left>
              <ul>
                <li onClick={() => menuHandler({ ap: true })}>
                  <p>Add Product</p>
                </li>
                <li onClick={() => menuHandler({ lp: true })}>
                  <p>Listed Product</p>
                </li>
                <li onClick={() => menuHandler({ au: true })}>
                  <p>App. User</p>
                </li>
                <li onClick={() => menuHandler({ mess: true })}>
                  <p>Messages</p>
                </li>
                <li onClick={() => menuHandler({ ro: true })}>
                  <p>Receive orders</p>
                </li>
                <li onClick={logout}>
                  <p>Logout</p>
                </li>
              </ul>
            </Left>
            <Right>
              {ap && <AddProduct />}
              {lp && <ProductListPanel />}
              {au && <AllUsers />}
              {mess && <MessageBox admin={true} />}
              {ro && <OrderList />}
            </Right>
          </Center>
        </>
      )}
    </Main>
  );
};

export default Panel;
