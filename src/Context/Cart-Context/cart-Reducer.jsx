import {
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
  moveToCart,
  moveToWishList,
} from "../../Utils/cart-utils";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return addToWishList(state, action);
    case "REMOVE_FROM_WISHLIST":
      return removeFromWishList(state, action);
    case "ADD_TO_CART":
      return addToCart(state, action);
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
    case "MOVE_TO_CART":
      return addToCart(state, action);
    case "MOVE_TO_WISHLIST":
      return addToWishList(state, action);
    default:
      return state;
  }
};
