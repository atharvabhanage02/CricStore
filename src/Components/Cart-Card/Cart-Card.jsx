import { useCart } from "../../Context/Cart-Context/cart-context";
import "./cart-card.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {
  notifyDecrementQuantity,
  notifyIncrementQuantity,
  notifyMoveToWishList,
  notifyRemoveFromCart,
} from "../../Utils/Notifications/notifications";

export const CartCard = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  return (
    <div className="all-cart-products">
      {cart.length === 0 ? (
        <div className="empty-cart-section">
          <h1 className="empty-cart-txt">Cart Empty</h1>
          <Link to="/productlisting">
            <button className="shop-btn"> Shop Now</button>
          </Link>
        </div>
      ) : null}
      {cart &&
        cart.map((item) => (
          <div className="horizontal-card">
            <div className="horizontal-image-container">
              <img src={item.image} className="horizontal-card-image" alt="" />
            </div>
            <div className="card-data">
              <div className="card-details-horizontal">
                <div className="card-product-name">
                  <div className="product-name">{item.name}</div>
                  <div className="product-details">{item.description}</div>
                </div>
                <div className="increase-decrease-section">
                  <AiOutlinePlusCircle
                    className="plus-icon"
                    onClick={() => {
                      dispatch({ type: "INCREASE_QUANTITY", payload: item });
                      notifyIncrementQuantity(item.name);
                    }}
                  />
                  {item.qty}
                  <AiOutlineMinusCircle
                    className="plus-icon"
                    onClick={() => {
                      dispatch({ type: "DECREASE_QUANTITY", payload: item });
                      notifyDecrementQuantity(item.name);
                    }}
                  />
                </div>
              </div>
              <div className="product-price">
                <span className="discounted-price">₹{item.price}</span>
                <span className="actual-price">₹{item.discountedPrice}</span>
                <span className="product-discount">({item.discount} OFF)</span>
              </div>
              <div className="card-actions">
                <button
                  className="apex-btn apex-cart-btn card-btn remove-btn"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: item });
                    notifyRemoveFromCart(item.name);
                  }}
                >
                  <i className="delete-cart-item far fa-trash-alt"></i>Remove
                </button>

                <button
                  className="apex-btn apex-cart-btn card-btn wishlist-btn"
                  onClick={() => {
                    dispatch({ type: "MOVE_TO_WISHLIST", payload: item });
                    notifyMoveToWishList(item.name);
                  }}
                >
                  {" "}
                  <i className="add-cart-item-to-wishlist far fa-heart"></i>Move to
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      <ToastContainer />
    </div>
  );
};
