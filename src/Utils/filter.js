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
  const categoriesArray = Object.keys(state.category).filter(
    (value) => state.category[value] === true
  );
  if (categoriesArray.length === 0) return data;
  return data.filter((product) => categoriesArray.includes(product.category));
};

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

export { Compose, filterSortBy, categoryFilter, ratingsFilter };
