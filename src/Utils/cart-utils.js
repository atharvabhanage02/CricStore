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
    totalPrice:
      Number(state.totalPrice) + Number(action.payload.discountedPrice),
    discountedPrice:
      Number(action.payload.discountedPrice) -
      Number(action.payload.price) +
      Number(state.discountedPrice),
    finalPrice: Number(state.finalPrice) + Number(action.payload.price),
  };
};
const removeFromCart = (state, action) => {
  return {
    ...state,
    cart: state.cart.filter((item) => item.id != action.payload.id),
    totalPrice:
      Number(state.totalPrice) -
      Number(action.payload.discountedPrice) * Number(action.payload.qty),
    discountedPrice:
      Number(state.discountedPrice) -
      (Number(action.payload.discountedPrice) - Number(action.payload.price)) *
        Number(action.payload.qty),
    finalPrice:
      Number(state.finalPrice) -
      Number(action.payload.price) * Number(action.payload.qty),
  };
};
const increaseQuantity = (state, action) => {
  return {
    ...state,
    cart: state.cart.map((item) =>
      item.id === action.payload.id
        ? {
            ...item,
            qty: item.qty + 1,
          }
        : item
    ),
    totalPrice:
      Number(state.totalPrice) + Number(action.payload.discountedPrice),
    discountedPrice:
      Number(action.payload.discountedPrice) -
      Number(action.payload.price) +
      Number(state.discountedPrice),
    finalPrice: Number(state.finalPrice) + Number(action.payload.price),
  };
};

const decreaseQuantity = (state, action) => {
  const isProductPresent = state.cart.find(
    (item) => item.id === action.payload.id
  );
  return state.cart.find((item) => item.id === action.payload.id)
    ? state.cart.find((item) => item.id === action.payload.id).qty > 1
      ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item
          ),
          totalPrice:
            Number(state.totalPrice) - Number(action.payload.discountedPrice),
          discountedPrice:
            Number(state.discountedPrice) -
            (Number(action.payload.discountedPrice) -
              Number(action.payload.price)),
          finalPrice: Number(state.finalPrice) - Number(action.payload.price),
        }
      : {
          ...state,
          cart: state.cart.filter((item) => item.id != action.payload.id),
          totalPrice:
            Number(state.totalPrice) - Number(action.payload.discountedPrice),
          discountedPrice:
            Number(state.discountedPrice) -
            (Number(action.payload.discountedPrice) -
              Number(action.payload.price)),
          finalPrice: Number(state.finalPrice) - Number(action.payload.price),
        }
    : {
        ...state,
        cart: [...state.cart],
        totalPrice:
          Number(state.totalPrice) - Number(action.payload.discountedPrice),
        discountedPrice:
          Number(state.discountedPrice) -
          (Number(action.payload.discountedPrice) -
            Number(action.payload.price)),
        finalPrice: Number(state.finalPrice) - Number(action.payload.price),
      };
};
export {
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
};
