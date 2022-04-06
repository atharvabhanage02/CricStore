import { useCart } from "../../Context/Cart-Context/cart-context";
import "./wishlist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export const notifyRemoveFromWishList = () =>
  toast.error("Item Removed from WishList", {
    position: "bottom-right",
    theme: "colored",
  });
const notifyMoveToCart = () =>
  toast.success("Item moved to Cart", {
    position: "bottom-right",
    theme: "colored",
  });
export const WishlistCard = () => {
  const { state, dispatch } = useCart();
  const { wishList, counter, totalPrice } = state;

  return (
    <div className="wishlist-wrapper">
      {wishList.length === 0 ? (
        <div className="empty-cart-section">
          <h1 className="empty-cart-txt">WishList Empty</h1>
          <Link to="/productlisting">
            <button className="apex-btn apex-primary-btn"> Shop Now</button>
          </Link>
        </div>
      ) : null}
      {wishList &&
        wishList.map((item) => (
          <div class="wishlist-container-center">
            <div class="wishlist-item">
              <div class="product-image">
                <img src={item.image} class="horizontal-card-image " alt="" />
              </div>
              <div class="wishlist-product-details">
                <div class="wishlist-product-title">
                  <div>
                    <div class="product-name">{item.name}</div>
                    <div class="product-details">{item.description}</div>
                  </div>
                  <div>
                    <i
                      class=" delete-icon far fa-trash-alt"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: item,
                        });
                        notifyRemoveFromWishList();
                      }}
                    ></i>
                  </div>
                </div>
                <div class="product-price">
                  <span class="discounted-price">₹{item.price}</span>
                  <span class="actual-price">₹{item.discountedPrice}</span>
                  <span class="product-discount">({item.discount} OFF)</span>
                </div>
                <button
                  class="apex-btn apex-cart-btn card-btn fa fa-shopping-cart new-btn"
                  disabled={!item.inStock}
                  onClick={() => {
                    dispatch({
                      type: "MOVE_TO_CART",
                      payload: item,
                    });
                    notifyMoveToCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      <ToastContainer />
    </div>
  );
};
