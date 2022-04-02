import { useProducts } from "../../Context/Product-Context/product-context";
import "./sidebar.css";
export const Sidebar = () => {
  const { state, dispatch } = useProducts();
  const productCategories = ["Bats", "Balls"];
  return (
    <div>
      <aside className="sidebar">
        <div className="product-filter">
          <h3 className="filter-actions">Filter</h3>

          <h3
            className="filter-actions clear-filters"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear
          </h3>
        </div>
        <div className="filter-by-price">
          <div className="slider-wrapper">
            <input type="range" className="slider" min="0" max="100" />
            <h4 className="slider-value">50</h4>
          </div>
        </div>
        <div className="product-sort">
          <h3 className="filter-feature">Sort</h3>
          <div className="categories">
            <label className="input-select">
              <input
                type="radio"
                id="low-to-high"
                name="SORT_BY"
                value="LOW_TO_HIGH"
                checked={state.sortBy == "LOW_TO_HIGH"}
                className="radio-input"
                onChange={(e) =>
                  dispatch({ type: e.target.name, payload: e.target.value })
                }
              />
              <span>Price - Low to High</span>
            </label>
            <label class="input-select">
              <input
                type="radio"
                id="high-to-low"
                name="SORT_BY"
                value="HIGH_TO_LOW"
                checked={state.sortBy == "HIGH_TO_LOW"}
                onChange={(e) =>
                  dispatch({ type: e.target.name, payload: e.target.value })
                }
                class="radio-input"
              />
              <span>Price - High to Low</span>
            </label>
          </div>
        </div>
        <h3 className="filter-feature">Check Availability</h3>
        <div className="categories">
          <label class="input-select">
            <input
              type="checkbox"
              id="stockCheck"
              name="stockCheck"
              className="checkbox-input"
              value="CHECK_STOCK"
              checked={state.outOfStock}
              onClick={(e) =>
                dispatch({ type: e.target.value, payload: e.target.checked })
              }
            />
            <span>Products in Stock</span>
          </label>
          <label class="input-select">
            <input
              type="checkbox"
              id="stockfastDelivery"
              className="checkbox-input"
              value="CHECK_FAST_DELIVERY"
              checked={state.fastDelivery}
              onClick={(e) =>
                dispatch({ type: e.target.value, payload: e.target.checked })
              }
            />
            <span>Fast Delivery Products</span>
          </label>
        </div>
        <div className="product-category">
          <h3 className="filter-feature">Category</h3>
          <div className="categories">
            {productCategories.map((category) => {
              return (
                <label className="input-select">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    value={state.category[category]}
                    checked={state.category[category] ? true : false}
                    onClick={() =>
                      dispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: category,
                      })
                    }
                  />
                  <span>{category}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="product-rating">
          <h3 className="filter-feature">Ratings</h3>
          <div className="categories">
            <label className="input-select">
              <input
                type="radio"
                className="radio-input1"
                name="rating"
                value="FourNAbove"
                checked={state.rating !== "FourNAbove" ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: e.target.value,
                  })
                }
              />
              <span>4 stars & above</span>
            </label>
            <label className="input-select">
              <input
                type="radio"
                className="radio-input1"
                name="rating"
                value="ThreeNAbove"
                checked={state.rating !== "ThreeNAbove" ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: e.target.value,
                  })
                }
              />
              <span>3 stars & above</span>
            </label>
            <label className="input-select">
              <input
                type="radio"
                className="radio-input1"
                name="rating"
                value="TwoNAbove"
                checked={state.rating !== "TwoNAbove" ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: e.target.value,
                  })
                }
              />
              <span>2 stars & above</span>
            </label>
            <label className="input-select">
              <input
                type="radio"
                className="radio-input1"
                name="rating"
                value="OneNAbove"
                checked={state.rating !== "OneNAbove" ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: e.target.value,
                  })
                }
              />
              <span>1 stars & above</span>
            </label>
          </div>
        </div>
      </aside>
    </div>
  );
};
