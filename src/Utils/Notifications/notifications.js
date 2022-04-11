import { toast } from "react-toastify";
const notifyAddToWishList = (name) => {
  toast.success(`Item ${name} added to WishList`, {
    position: "bottom-right",
    theme: "colored",
    autoClose: 2000,
  });
};
const notifyRemoveFromWishList = (name) => {
  toast.error(`Item ${name} removed from WishList`, {
    position: "bottom-right",
    theme: "colored",
    autoClose: 2000,
  });
};

const notifyAddToCart = (name) => {
  toast.success(`Item ${name} added to Cart`, {
    position: "bottom-right",
    theme: "colored",
    autoClose: 2000,
  });
};
const notifyMoveToCart = (name) => {
  toast.success(`Item ${name} moved to Cart`, {
    position: "bottom-right",
    theme: "colored",
    autoClose: 2000,
  });
};
const notifyRemoveFromCart = (name) => {
  toast.error(`Item ${name} removed from Cart`, {
    position: "bottom-right",
    theme: "colored",
    autoClose: 2000,
  });
};
const notifyMoveToWishList = (name) => {
  toast.success(`Item ${name} moved to WishList`, {
    position: "bottom-right",
    theme: "colored",
    autoClose: 2000,
  });
};

const notifyIncrementQuantity = (name) => {
    toast.success(`Item ${name} quantity Incremented`, {
      position: "bottom-right",
      theme: "colored",
      autoClose: 1000,
    });
};
const notifyDecrementQuantity = (name) => {
    toast.error(`Item ${name} quantity Decremented`, {
      position: "bottom-right",
      theme: "colored",
      autoClose: 1000,
    });
};

export {
  notifyAddToWishList,
  notifyRemoveFromWishList,
  notifyAddToCart,
  notifyMoveToCart,
  notifyRemoveFromCart,
  notifyMoveToWishList,
  notifyIncrementQuantity,
  notifyDecrementQuantity
};
