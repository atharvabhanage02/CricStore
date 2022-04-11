import { Link } from "react-router-dom";
import { useCart } from "../../Context/Cart-Context/cart-context";
import "./navbar.css";
export const Navbar = () => {
  const { state, dispatch } = useCart();
  const { counter, totalPrice, wishList, cart } = state;
  const wishListCount = wishList.length;
  const cartCount = cart.length;
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title">
          <Link class="ecom-name" to="/">
            CricStore
          </Link>
        </div>

        <div class="search-container">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="search-bar"
            aria-hidden="true"
            placeholder="Search"
          />
        </div>

        <div class="user-activity-details">
          <a href="">
            {" "}
            <img
              src="Assets/profile.png"
              class="apex-avatar avatar-round-sm"
              alt=""
            />
          </a>
          <div class="badges">
            <Link to="/Wishlist">
              <div class="icon wishlist-icon far fa-heart"></div>
            </Link>

            <span class="badge-count badge-count-right badge-circle-blue">
              {wishListCount}
            </span>
          </div>
          <div class="badges">
            <Link to="/Cart">
              <div class="icon wishlist-icon fas fa-shopping-cart"></div>
            </Link>
            <span class="badge-count badge-count-right badge-circle-orange">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
