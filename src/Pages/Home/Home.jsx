import { Navbar } from "../../Components/Navbar/Navbar";
import "./home.css";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { ToastContainer } from "react-toastify";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* From Banner */}
      <div>
        <div
          className="home-bg"
          style={{ backgroundImage: "url('Assets/ecom-bg.jpg')" }}
        >
          <div className="home-text-section">
            <h1 className="home-heading">Shop with Quality and Trust</h1>
            <button className="shop-btn">
              <Link className="shop-link-btn" to="/productlisting">
                Shop Now{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
      <h1 className="home-featured-heading">Major Categories</h1>
      <div className="featured-container">
        {categories.map(({ category, img }) => {
          return (
            <div className="category-section">
              <div className="featured-category-name">{category}</div>
              <Link to={`/productlisting?categories=${category}`}>
                <div className="inner-content">
                  <img className="category-img" src={img}></img>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <footer className="footer">
        <div className="address">
          <h3 className="footer-headings">Visit our Store</h3>
          <div className="address">XYZ Street , Banglore -000 001</div>
        </div>
        <div className="quick-links">
          <h3 className="footer-headings">Quick Links</h3>
          <Link to="/login" className="page-links">
            Login/SignUp
          </Link>
          <Link to="/productlisting" className="page-links">
            Product Page
          </Link>
          <Link to="/wishlist" className="page-links">
            Wishlist
          </Link>
          <Link to="/cart" className="page-links">
            Cart
          </Link>
        </div>
        <div className="contact-us">
          <h3 className="footer-headings">Contact Us</h3>
          <a href="" className="page-links">
            Email
          </a>
          <a href="" className="page-links">
            FAQ's
          </a>
        </div>
        <div className="follow-us">
          <h3 className="footer-headings">Follow Us On </h3>
          <div className="social-links">
            <a href="#" className="socials-icon fab fa-youtube"></a>
            <a href="#" className="socials-icon fab fa-instagram"></a>
            <a href="#" className="socials-icon fab fa-facebook"></a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export { Home };
