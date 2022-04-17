import "./App.css";
import { ProductPage } from "./Pages/ProductListing/ProductPage";
import { Routes, Route } from "react-router-dom";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Cart } from "./Pages/Cart/Cart";
import {Home} from "./Pages/Home/Home"
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductPage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
