import { Navbar } from "../../Components/Navbar/Navbar";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./productCard.css";

export const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="products-list">{<ProductCard />}</div>
    </div>
  );
 
};
