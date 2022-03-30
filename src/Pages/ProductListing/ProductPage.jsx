import { Navbar } from "../../Components/Navbar/Navbar";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import "./productCard.css";

export const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="products-list">{<ProductCard />}</div>
    </div>
  );
 
};
