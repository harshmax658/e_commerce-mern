import React from "react";

import { addItemInCart, setCartTotal } from "../../redux/cart/action";
import { useDispatch } from "react-redux";

import {
  CollectionItemConatiner,
  ImageStyle,
  CollectionFooterStyle,
  NameStyle,
  CustomButtonStyle,
} from "./CollectionItem.Style";
const CollectionItem = ({ item }) => {
  const { image, name, price } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemConatiner>
      <ImageStyle imageUrl={`uploads/images/${image}`} />
      <CollectionFooterStyle>
        <NameStyle>{name}</NameStyle>
        <span className="price">₹{price}</span>
      </CollectionFooterStyle>
      <CustomButtonStyle
        onClick={() => {
          dispatch(addItemInCart(item));
          dispatch(setCartTotal());
        }}
      >
        Add to Cart
      </CustomButtonStyle>
    </CollectionItemConatiner>
  );
};

export default CollectionItem;
