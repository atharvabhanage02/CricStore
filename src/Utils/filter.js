const Compose =
  (state, ...functions) =>
  (data) =>
    functions.reduce((acc, cur) => cur(state, acc), data);

const filterSortBy = (state, data) => {
  switch (state.sortBy) {
    case "LOW_TO_HIGH":
      return [...data].sort((a, b) => Number(a.price) - Number(b.price));
    case "HIGH_TO_LOW":
      return [...data].sort((a, b) => Number(b.price) - Number(a.price));
    default:
      return data;
  }
};

const categoryFilter = (state, data) => {
  const categoriesPresent = Object.keys(state.category).filter(
    (value) => state.category[value] === true
  );
  if (categoriesPresent.length === 0) return data;
  return data.filter((product) => categoriesPresent.includes(product.category));
};

const inStockProducts = (state, data) =>
  state.outOfStock ? data.filter((item) => item.inStock === true) : data;

const fastDeliveryProducts = (state, data) =>
  state.fastDelivery ? data.filter((item) => item.fastDelivery === true) : data;

const ratingsFilter = (state, data) => {
  switch (state.rating) {
    case "FourNAbove":
      return [...data].filter((item) => item.rating >= 4);
    case "ThreeNAbove":
      return [...data].filter((item) => item.rating >= 3);
    case "TwoNAbove":
      return [...data].filter((item) => item.rating >= 2);
    case "OneNAbove":
      return [...data].filter((item) => item.rating >= 1);
    default:
      return data;
  }
};
const searchHandler = (state, data) => {
  if (state.search.length !== 0) {
    console.log("into if again");
    return [...data].filter((item) =>
      item.name.toLowerCase().includes(state.search)
    );
  }
  return data;
};

const sliderFilter = (state, data) => {
  if (state.sliderVal === 0) {
    return data;
  }
  return data.filter((item) => Number(item.price) <= state.sliderVal);
};

export {
  Compose,
  filterSortBy,
  categoryFilter,
  ratingsFilter,
  inStockProducts,
  fastDeliveryProducts,
  searchHandler,
  sliderFilter,
};
