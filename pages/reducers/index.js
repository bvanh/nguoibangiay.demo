export default (state, action) => {
  switch (action.type) {
    case "sanphammoi":
      return {
        ...state,
        category: action.type,
        cart: action
      };
    case "ADD_TOCART":
      return {
        ...state,
        category: action.type,
        cart: [...state.cart, action.db]
      };
    default:
      return state;
  }
};
