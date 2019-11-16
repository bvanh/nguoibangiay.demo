import { createStore } from "redux";
import reducer from "../reducers/index";

const initialState = {
  category: "demo",
  cart: []
};
export const store = createStore(reducer, initialState);
