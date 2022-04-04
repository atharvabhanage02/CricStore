import { useContext, createContext, useState, useReducer } from "react";
import { cartReducer } from "./cart-Reducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    wishList: [],
    cart: [],
    counter: 0,
    totalPrice: 0,
    discountedPrice: 0,
    finalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
