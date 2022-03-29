import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title">
          <a href="" class="ecom-name">
            CricStore
          </a>
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
            {/* <Link to="/Wishlist"> */}
              <div class="icon wishlist-icon far fa-heart"></div>
            {/* </Link> */}

            <span class="badge-count badge-count-right badge-circle-blue">
              4
            </span>
          </div>
          <div class="badges">
            {/* <Link to="/Cart"> */}
              <div class="icon wishlist-icon fas fa-shopping-cart"></div>
            {/* </Link> */}
            <span class="badge-count badge-count-right badge-circle-orange">
              4
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
