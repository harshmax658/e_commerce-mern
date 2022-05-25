import { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./pages/hompage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignup from "./pages/signInSignup/SignInAndSignup";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import MobileMenu from "./components/mobileMenu/MobileMenu";

import { checkUsersSession } from "./redux/user/action";

import { useSelector, useDispatch } from "react-redux";

import Contact from "./pages/contact page/Contact";

import { GlobalStyle } from "./globalStyle";
import Panel from "./pages/admin/Panel";

import CollectionPage from "./pages/collection/CollectionPage";

import UserMessage from "./components/User Message/UserMessage";
import Orders from "./pages/Orders/Orders";

const App = () => {
  const [click, setClick] = useState(false);

  const state = useSelector((state) => state.userReducer);

  const { currentUser } = state;

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(checkUsersSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />

      {pathname !== "/admin" && (
        <Header user={currentUser} click={click} setClick={setClick} />
      )}
      {click && <MobileMenu user={currentUser} click setClick={setClick} />}
      {/* {!logoAnimation && ( */}
      <Switch>
        <Route path="/admin" exact component={Panel} />
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/message" exact component={UserMessage} />
        <Route path="/orders" exact component={Orders} />
        <Route
          path="/signin"
          exact
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignup />
          }
        />
        <Route path={`/:categoryName`} component={CollectionPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
