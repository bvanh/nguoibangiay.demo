import { createStore } from "redux";
import reducer from "../reducers/index";


const initialState = {
  category: "demo",
  cart: [],
  allproducts: [],
  sanphammoi: [],
  sanphambanchay: [],
  phukien: [],
  sanphamkhuyenmai: []
};
export const store = createStore(reducer, initialState);
