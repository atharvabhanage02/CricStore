import "./cart-card.css";
import { useCart } from "../../Context/Cart-Context/cart-context";
export const OrderDetails = () => {
  const {
    state: { totalPrice, discountedPrice, finalPrice },
  } = useCart();
  return (
    <div class="order-wrapper">
      <div class="order-details">
        <h3>Order Details</h3>
        <div class="order-price">
          <div>
            <p>Price (2 items)</p>
            <p>Rs.{totalPrice}</p>
          </div>
          <div>
            <p>Discount</p>
            <p>Rs.{discountedPrice} </p>
          </div>
          <div>
            <p>Delivery Charges</p>
            <p>-FREE</p>
          </div>
          <div>
            <p>Coupon Discount</p>
            <p>-Rs.0</p>
          </div>
          <div class="total-amount">
            <p>Tota Amount</p>
            <p>Rs {finalPrice}</p>
          </div>
        </div>
        <button class="login-btn">Place Order</button>
      </div>
    </div>
  );
};
