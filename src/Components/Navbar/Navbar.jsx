import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../Context/Cart-Context/cart-context";
import "./navbar.css";
import { useAuth } from "../../Context/Auth/auth-context";
import { useProducts } from "../../Context/Product-Context/product-context";
import { FiLogOut } from "react-icons/fi";
export const Navbar = () => {
  const { state } = useCart();
  const { wishList, cart } = state;
  const wishListCount = wishList.length;
  const cartCount = cart.length;
  const { login, logOutUser } = useAuth();
  const { state: prodState, dispatch: prodDispatch } = useProducts();
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
            value={prodState.search}
            onChange={(e) =>
              prodDispatch({ type: "SEARCH", payload: e.target.value })
            }
          />
        </div>

        <div className="user-activity-details">
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
          {!login.isLogIn ? (
            <Link className="navbar-login-btn" to="/login">
              Login
            </Link>
          ) : (
            <FiLogOut
              className="icon wishlist-icon"
              onClick={() => logOutUser()}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
