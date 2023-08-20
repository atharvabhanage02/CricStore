import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./Context/Product-Context/product-context";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/Cart-Context/cart-context";
import { AuthProvider } from "./Context/Auth/auth-context";
import { Provider } from "react-redux";
import store from "./redux/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <CartProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </CartProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
