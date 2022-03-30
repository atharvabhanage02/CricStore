import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";

const ProductContext = createContext();
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProductsList(products);
      } catch {
        console.error("ERROR AGAYA");
      }
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{productsList}}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, useProducts };
