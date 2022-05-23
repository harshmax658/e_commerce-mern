import {
  TOOGLE_CARD_HIDDEN,
  ADD_ITEM_IN_CART,
  SET_CART_TOTAL,
  REMOVE_ITEM_FROM_FROM_CART,
  DECREASE_QTY_OF_CART_ITEM,
  RESET_CART,
} from "./action";

import {
  addItemToCart,
  removeCartItem,
  decreaseQuantity,
} from "./cartFunctions";

const initial_state = {
  hidden: true,
  cartItems: [],
  totalCartItem: 0,
};
const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TOOGLE_CARD_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM_IN_CART: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.data),
      };
    }

    case SET_CART_TOTAL:
      console.log("first");
      return {
        ...state,
        totalCartItem: state.cartItems.reduce((total = 0, item) => {
          return (total += item.quantity);
        }, 0),
      };

    case REMOVE_ITEM_FROM_FROM_CART:
      const newCart = state.cartItems.filter(
        (data) => data._id !== action.data
      );

      return {
        ...state,
        cartItems: newCart,
      };
    case DECREASE_QTY_OF_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.data),
      };
    case RESET_CART:
      return {
        ...state,
        totalCartItem: 0,
        cartItems: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
