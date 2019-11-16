import { store } from "../store/index";
export function setIdsanphammoi(text) {
  return {
    type: "sanphammoi",
    db: text
  };
}
export function addToCart(text) {
  return {
    type: "ADD_TOCART",
    db:text
  };
}
export function dispatchAddToCart(data) {
  store.dispatch(addToCart(data));
}
