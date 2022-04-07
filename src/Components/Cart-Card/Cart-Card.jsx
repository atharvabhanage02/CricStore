import { useCart } from "../../Context/Cart-Context/cart-context";
import "./cart-card.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export const CartCard = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();
  const notifyRemoveFromCart = () =>
    toast.error("Item Removed from Cart", {
      position: "bottom-right",
      theme: "colored",
    });
  const notifyMoveToWishList = () =>
    toast.success("Item moved to WishList", {
      position: "bottom-right",
      theme: "colored",
    });
  return (
    <div class="all-cart-products">
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
          <div class="horizontal-card">
            <div class="horizontal-image-container">
              <img src={item.image} class="horizontal-card-image" alt="" />
            </div>
            <div class="card-data">
              <div class="card-details-horizontal">
                <div class="card-product-name">
                  <div class="product-name">{item.name}</div>
                  <div class="product-details">{item.description}</div>
                </div>
                <div className="increase-decrease-section">
                  <AiOutlinePlusCircle
                    className="plus-icon"
                    onClick={() =>
                      dispatch({ type: "INCREASE_QUANTITY", payload: item })
                    }
                  />
                  {item.qty}
                  <AiOutlineMinusCircle
                    className="plus-icon"
                    onClick={() =>
                      dispatch({ type: "DECREASE_QUANTITY", payload: item })
                    }
                  />
                </div>
              </div>
              <div class="product-price">
                <span class="discounted-price">₹{item.price}</span>
                <span class="actual-price">₹{item.discountedPrice}</span>
                <span class="product-discount">({item.discount} OFF)</span>
              </div>
              <div class="card-actions">
                <button
                  class="apex-btn apex-cart-btn card-btn remove-btn"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: item });
                    notifyRemoveFromCart();
                  }}
                >
                  <i class="delete-cart-item far fa-trash-alt"></i>Remove
                </button>

                <button
                  class="apex-btn apex-cart-btn card-btn wishlist-btn"
                  onClick={() => {
                    dispatch({ type: "MOVE_TO_WISHLIST", payload: item });
                    notifyMoveToWishList();
                  }}
                >
                  {" "}
                  <i class="add-cart-item-to-wishlist far fa-heart"></i>Move to
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
