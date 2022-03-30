import React from "react";
import { useProducts } from "../../Context/Product-Context/product-context";
import "./productcard.css";
export const ProductCard = () => {
  const { products } = useProducts();
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
              <i className="icon card-icon far fa-heart"></i>
            </div>
            <div className="product-price">
              <span className="discounted-price">₹{item.price}</span>
              <span className="actual-price">₹{item.discountedPrice}</span>
              <span className="product-discount">({item.discount}% OFF)</span>
            </div>
            <div className="card-actions">
              <button className="apex-btn apex-cart-btn card-btn fa fa-shopping-cart">
                Add to Cart
              </button>
            </div>
            {!item.inStock ? (
              <span className="out-of-stock">Out Of Stock</span>
            ) : null}
          </div>
        ))}
    </div>
  );
};
