import React from "react";
import { useProducts } from "../../Context/Product-Context/product-context";
import { useCart } from "../../Context/Cart-Context/cart-context";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  notifyAddToWishList,
  notifyRemoveFromWishList,
} from "../../Utils/Notifications/notifications";
import "./productcard.css";
import { useAuth } from "../../Context/Auth/auth-context";
export const ProductCard = () => {
  const {
    state: { wishList, cart },
    dispatch,
  } = useCart();
  const { products } = useProducts();
  const {
    login: { isLogIn },
  } = useAuth();
  const navigate = useNavigate();
  const notifyAddToCart = (name) => {
    if (isLogIn) {
      toast.success(`Item ${name} added to Cart`, {
        position: "bottom-right",
        theme: "colored",
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="all-products">
      {products &&
        products.map((item) => (
          <div
            className={
              item.inStock
                ? "basic-vertical-card"
                : "basic-vertical-card card-with-text-overlay"
            }
          >
            <div className="card-image-container">
              <img src={item.image} className="card-image" alt="" />
            </div>
            {item.bestSeller && <span className="card-badge">BestSeller</span>}

            <div className="card-details">
              <div className="card-product-name">
                <div className="product-name">{item.name}</div>
                <div className="product-details">
                  {item.description} || {item.rating}
                </div>
              </div>
              <i className="icon ">
                {wishList.some((product) => product.id === item.id) ? (
                  <BsFillHeartFill
                    className="card-icon"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: item,
                      });
                      notifyRemoveFromWishList(item.name);
                    }}
                  />
                ) : (
                  <BsHeart
                    className=""
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: item,
                      });
                      notifyAddToWishList(item.name);
                    }}
                  />
                )}
              </i>
            </div>
            <div className="product-price">
              <span className="discounted-price">₹{item.price}</span>
              <span className="actual-price">₹{item.discountedPrice}</span>
              <span className="product-discount">({item.discount}% OFF)</span>
            </div>
            <div className="card-actions">
              {!cart.find((prod) => prod.id === item.id) ? (
                <button
                  className="apex-btn apex-cart-btn card-btn fa fa-shopping-cart"
                  disabled={item.inStock ? false : true}
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    });
                    notifyAddToCart(item.name);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <Link
                  disabled={!isLogIn}
                  className=" apex-cart-btn card-btn fa fa-shopping-cart underline-none"
                  to="/cart"
                >
                  Go to Cart
                </Link>
              )}
            </div>
            {!item.inStock ? (
              <span className="out-of-stock">Out Of Stock</span>
            ) : null}
          </div>
        ))}
      <ToastContainer />
    </div>
  );
};
