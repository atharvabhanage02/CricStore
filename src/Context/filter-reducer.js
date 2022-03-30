export function filterProductsReducer(state, action) {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };
    case "FILTER_BY_RATINGS":
      return {
        ...state,
        rating: action.payload,
      };
    case "CLEAR":
      return {
        sortBy: "",
        category: { Bats: false, Balls: false },
        rating: "",
      };
    default:
      return state;
  }
}
