import { NavLink, Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";

const OptionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
`;
const DisplayNone = css`
  display: none;
`;
const ml8P = css`
  margin-left: 8%;
`;

export const HemBurgerIconsStyle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 570px) {
    display: flex;
  }
`;

export const HeaderComponentStyle = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 4;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
  }

  @media (max-width: 690px) {
    background-color: aqua;
    padding: 0 10px;
    height: 65px;
    font-size: 1rem;
  }

  @media (max-width: 570px) {
    display: grid;
    grid-template-columns: 2fr 3.5fr 0fr;
  }
`;
export const LogoComponentStyle = styled.div`
  font-size: 4.3rem;
  padding: 0 25px;
  height: 100%;
  a {
    display: flex;
  }

  @media (max-width: 690px) {
    font-size: 3.3rem !important;
  }
  @media (max-width: 570px) {
    ${ml8P}
  }
`;
export const LogoLink = styled(Link)`
  color: #00b8ff;
`;
export const MenuOptionsContainerStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  justify-content: flex-end;
`;
export const OptionDiv = styled.div`
  ${OptionContainerStyle}
`;
export const OptionNavLink = styled(NavLink)`
  ${OptionContainerStyle}
`;
export const ActiveNavLink = styled(NavLink)`
  color: red;
`;
export const NavbarLinks = styled.div`
  display: flex;
  @media (max-width: 570px) {
    ${DisplayNone}
  }
`;

export const MediaQ = createGlobalStyle`

@media (max-width: 570px) {
  .header {
    display: grid;

    grid-template-columns: 2fr 3.5fr 0fr;
  }
  .header .hamBurger {
    display: flex;
  }
  .header .logo_container {
    margin-left: 8%;
  }
  .header .menu_option .links {
    display: none;
  }
}

`;
