import "./App.css";
import { ProductPage } from "./Pages/ProductListing/ProductPage";
import { Routes, Route } from "react-router-dom";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Cart } from "./Pages/Cart/Cart";
import MockMan from "mockman-js";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { RequiresAuth } from "./Components/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="/productlisting" element={<ProductPage />} />
        <Route
          path="/Wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/Cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
