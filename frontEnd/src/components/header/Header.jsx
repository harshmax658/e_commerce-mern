import React from "react";
import "./header.scss";
// import "./headerStyle.css";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartdrop-down/CartDropDown";
import { NavLink, useHistory } from "react-router-dom";
import { GiFireBowl } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toogleCardHandle } from "../../redux/cart/action";
import { signOutSuccess } from "../../redux/user/action";
import HamBurgerMenu from "../hamBurgerMenu/HamBurgerMenu";
import {
  HeaderComponentStyle,
  LogoComponentStyle,
  MenuOptionsContainerStyle,
  HemBurgerIconsStyle,
  LogoLink,
  NavbarLinks,
  MediaQ,
} from "./HeaderStyleComponent";
const Header = ({ user, click, setClick }) => {
  const state = useSelector((state) => state.cartReducer);
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  const history = useHistory();
  const { hidden, totalCartItem } = state;

  const dispatch = useDispatch();

  return (
    <HeaderComponentStyle>
      <MediaQ />
      <HemBurgerIconsStyle onClick={() => setClick(!click)}>
        <HamBurgerMenu click={click} />
      </HemBurgerIconsStyle>

      <LogoComponentStyle>
        <LogoLink to="/">
          <GiFireBowl />
        </LogoLink>
      </LogoComponentStyle>
      <MenuOptionsContainerStyle>
        <NavbarLinks>
          <NavLink className="option" to="/">
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="ActiveNavLink"
            className="option"
            to="/shop"
          >
            shop
          </NavLink>
          <NavLink
            exact
            activeClassName="ActiveNavLink"
            className="option"
            to="/contact"
          >
            contact
          </NavLink>
          {user ? (
            <>
              <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-dark dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {currentUser.displayName.toUpperCase()}
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a
                            className="dropdown-item option white"
                            onClick={() => history.push("/orders")}
                          >
                            Your Orders
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item option white"
                            onClick={() => history.push("/message")}
                          >
                            Messages
                          </a>
                        </li>
                        <li>
                          <div
                            className="option white"
                            onClick={() => dispatch(signOutSuccess())}
                          >
                            Sign Out
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* <div className="option" onClick={() => dispatch(signOutStart())}>
              Sign Out
            </div> */}
            </>
          ) : (
            <NavLink
              exact
              activeClassName="ActiveNavLink"
              className="option"
              to="/signin"
            >
              Sign IN
            </NavLink>
          )}
        </NavbarLinks>
        <CartIcon
          totalCartItem={totalCartItem}
          onClick={() => dispatch(toogleCardHandle())}
        />
      </MenuOptionsContainerStyle>
      {hidden ? null : <CartDropDown />}
    </HeaderComponentStyle>
  );
};

export default Header;
