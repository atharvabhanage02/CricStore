const addToWishList = (state, action) => {
  const isProductPresent = state.wishList.find(
    (item) => item.id === action.payload.id
  );
  return {
    ...state,
    counter: state.counter + 1,
    totalPrice: Number(state.totalPrice) + Number(action.payload.price),
    wishList: !isProductPresent
      ? [...state.wishList, { ...action.payload, qty: 1 }]
      : state.wishList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        ),
  };
};
const removeFromWishList = (state, action) => {
  return {
    ...state,
    counter: state.counter - 1,
    totalPrice: Number(state.totalPrice) - Number(action.payload.price),
    wishList: state.wishList.filter((item) => item.id != action.payload.id),
  };
};

const addToCart = (state, action) => {
  const isProductPresent = state.cart.find(
    (item) => item.id === action.payload.id
  );
  return {
    ...state,
    cart: !isProductPresent
      ? [...state.cart, { ...action.payload, qty: 1 }]
      : state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        ),
  };
};
const removeFromCart = (state, action) => {
  return {
    ...state,
    counter: state.counter - 1,
    totalPrice: Number(state.totalPrice) - Number(action.payload.price),
    cart: state.cart.filter((item) => item.id != action.payload.id),
  };
};
const moveToCart = (state, action) => {
  return {};
};

const moveToWishList = (state, action) => {
  return {};
};
export {
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
  moveToCart,
  moveToWishList,
};
