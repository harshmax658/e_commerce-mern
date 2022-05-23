export const TOOGLE_CARD_HIDDEN = "toogle_card_hidden";
export const ADD_ITEM_IN_CART = "add_item_in_cart";
export const SET_CART_TOTAL = "set_cart_total";
export const REMOVE_ITEM_FROM_FROM_CART = "remove_item_from_cart";
export const DECREASE_QTY_OF_CART_ITEM = "decrease_quantity_of_item";
export const RESET_CART = "reset_cart";

export const toogleCardHandle = () => {
  return { type: TOOGLE_CARD_HIDDEN };
};
export const addItemInCart = (data) => {
  return {
    type: ADD_ITEM_IN_CART,
    data,
  };
};

export const setCartTotal = () => {
  return {
    type: SET_CART_TOTAL,
  };
};
export const removeItemFromCart = (data) => {
  return {
    type: REMOVE_ITEM_FROM_FROM_CART,
    data,
  };
};
export const decreaseQuantityOfItem = (data) => {
  return {
    type: DECREASE_QTY_OF_CART_ITEM,
    data,
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
