import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../Context/Cart-Context/cart-context";
import "./navbar.css";
import { useAuth } from "../../Context/Auth/auth-context";
export const Navbar = () => {
  const { state } = useCart();
  const { wishList, cart } = state;
  const wishListCount = wishList.length;
  const cartCount = cart.length;
  const { login } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="ecom-title">
          <Link className="ecom-name" to="/">
            CricStore
          </Link>
        </div>

        <div className="search-container">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="search-bar"
            aria-hidden="true"
            placeholder="Search"
          />
        </div>

        <div className="user-activity-details">
          {!login.isLogIn ? (
            <Link className="navbar-login-btn" to="/login">
              Login
            </Link>
          ) : null}
          <div className="badges">
            <Link to="/Wishlist">
              <div className="icon wishlist-icon far fa-heart"></div>
            </Link>

            <span className="badge-count badge-count-right badge-circle-blue">
              {wishListCount}
            </span>
          </div>
          <div className="badges">
            <Link to="/Cart">
              <div className="icon wishlist-icon fas fa-shopping-cart"></div>
            </Link>
            <span className="badge-count badge-count-right badge-circle-orange">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
