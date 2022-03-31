import { CartCard } from "../../Components/Cart-Card/Cart-Card";
import { OrderDetails } from "../../Components/Cart-Card/OrderDetails";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useCart } from "../../Context/Cart-Context/cart-context";
import "./cart.css";
export const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;
  return (
    <div>
      <Navbar />
      <div className="cart-items-wrapper">
        <div className="display-items">
          <CartCard />
          {cart.length > 0 && <OrderDetails />}
        </div>
      </div>
    </div>
  );
};
