export const addItemToCart = (cartItem, newcartItem) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem._id === newcartItem._id
  );
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem._id === newcartItem._id
        ? { ...newcartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItem, { ...newcartItem, quantity: 1 }];
};
export const removeCartItem = (cartItem, deleteRequestId) => {
  const newArray = cartItem.filter(
    (cartItem) => cartItem.id !== deleteRequestId
  );
  return newArray;
};

export const decreaseQuantity = (cartItem, decQId) => {
  const existingCartItem = cartItem.find((data) => data._id === decQId);

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem._id !== decQId);
  }

  return cartItem.map((item) =>
    item._id === decQId ? { ...item, quantity: item.quantity - 1 } : item
  );
};
