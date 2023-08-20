const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
