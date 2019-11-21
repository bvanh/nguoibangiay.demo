export default (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return {
        ...state,
        category: action.type,
        allproducts: action.db
      };
    case "GET_NEWPRODUCTS":
      return {
        ...state,
        sanphammoi: action.db
      };
    case "GET_BESTSELLPRODUCTS":
      return {
        ...state,
       sanphambanchay: action.db
      };
    case "GET_PHUKIEN":
      return {
        ...state,
        phukien: action.db
      };
    case "ADD_TOCART":
      let addcart=[...state.cart]
      addcart.push(action.payload.db)
      return {
        ...state,
        category: action.type,
        cart:addcart
        // cách 2 thêm sản phẩm
        // cart: [...state.cart, action.payload.db]

      };
    case "DELETE_CART":
      let newcart = [
        ...state.cart.filter((elem, idx) => {
          return elem !== action.payload.db;
        })
      ];
      return {
        ...state,
        cart: newcart
      };
    case "PLUS_PRODUCTS":
      if (state.cart[action.payload.id].quantity < 9) {
        state.cart[action.payload.id].quantity++;
        return {
          ...state,
          category: action.type
        };
      }
    case "MINUS_PRODUCTS":
      if (state.cart[action.payload.id].quantity > 1) {
        state.cart[action.payload.id].quantity--;
        return {
          ...state,
          category: action.type
        };
      }
    case "SORT_ASC":
      return {
        ...state,
        allproducts: action.payload.db
      };
    default:
      return state;
  }
};
