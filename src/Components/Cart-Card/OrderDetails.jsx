import "./cart-card.css";
export const OrderDetails = () => {
  return (
    <div class="order-wrapper">
      <div class="order-details">
        <h3>Order Details</h3>
        <div class="order-price">
          <div>
            <p>Price (2 items)</p>
            <p>Rs.3,768</p>
          </div>
          <div>
            <p>Discount</p>
            <p>-Rs.399</p>
          </div>
          <div>
            <p>Delivery Charges</p>
            <p>-FREE</p>
          </div>
          <div>
            <p>Coupon Discount</p>
            <p>-Rs.199</p>
          </div>
          <div class="total-amount">
            <p>Tota Amount</p>
            <p>-Rs.3,170</p>
          </div>
        </div>
        <button class="login-btn">Place Order</button>
      </div>
    </div>
  );
};
