import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  Title,
} from "./MenuItemStyle.js";

const MenuItem = ({ title, imageUrl, size }) => {
  const location = useLocation();

  const history = useHistory();

  return (
    <>
      <MenuItemContainer
        size={size}
        onClick={() => history.push(`${location.pathname}${title}`)}
      >
        <BackgroundImageContainer
          className="backgroundImage"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <ContentContainer className="content">
          <Title>{title}</Title>
          <span className="subtitle">Shop Now</span>
        </ContentContainer>
      </MenuItemContainer>
    </>
  );
};

export default MenuItem;
