import { toast } from "react-toastify";
const base = { position: "bottom-right", theme: "colored", autoClose: 2000 };
const notifyAddToWishList = (name) => {
  toast.success(`Item ${name} added to WishList`, { ...base });
};
const notifyRemoveFromWishList = (name) => {
  toast.error(`Item ${name} removed from WishList`, { ...base });
};

const notifyMoveToCart = (name) => {
  toast.success(`Item ${name} moved to Cart`, { ...base });
};
const notifyRemoveFromCart = (name) => {
  toast.error(`Item ${name} removed from Cart`, { ...base });
};
const notifyMoveToWishList = (name) => {
  toast.success(`Item ${name} moved to WishList`, { ...base });
};

const notifyIncrementQuantity = (name) => {
  toast.success(`Item ${name} quantity Incremented`, {
    ...base,
    autoClose: 1000,
  });
};
const notifyDecrementQuantity = (name) => {
  toast.warning(`Item ${name} quantity Decremented`, {
    ...base,
    autoClose: 1000,
  });
};

const notifyOnLogout = () => {
  toast.error("Logged Out Successfully!", { ...base });
};

export {
  notifyAddToWishList,
  notifyRemoveFromWishList,
  notifyMoveToCart,
  notifyRemoveFromCart,
  notifyMoveToWishList,
  notifyIncrementQuantity,
  notifyDecrementQuantity,
  notifyOnLogout,
};
