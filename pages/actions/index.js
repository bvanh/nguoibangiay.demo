import { store } from "../store/index";
import React from "react";

export function addAllProducts(text) {
  return {
    type: "SHOW_PRODUCTS",
    db: text
  };
}
export function addToCart(text) {
  return {
    type: "ADD_TOCART",
    payload: { db: text}
  };
}
export function deleteToCart(text) {
  return {
    type: "DELETE_CART",
    payload: { db: text}
  };
}
export function plusProducts(index) {
  return {
    type: "PLUS_PRODUCTS",
    payload: { id: index }
  };
}
export function minusProducts(index) {
  return {
    type: "MINUS_PRODUCTS",
    payload: { id: index }
  };
}
export function sortData(data) {
  return {
    type: "SORT_ASC",
    payload: { db: data }
  };
}
export function fetchNewProducts(data) {
  return {
    type: "GET_NEWPRODUCTS",
    db: data
  };
}
export function fetchBestSellProducts(data) {
  return {
    type: "GET_BESTSELLPRODUCTS",
    db: data
  };
}
export function fetchPhukien(data) {
  return {
    type: "GET_PHUKIEN",
    db: data
  };
}
function dispatchNewProducts(data) {
  store.dispatch(fetchNewProducts(data));
}
function dispatchBestSell(data) {
  store.dispatch(fetchBestSellProducts(data));
}
function dispatchPhukien(data) {
  store.dispatch(fetchPhukien(data));
}
function dispatchAddToCart(data, index) {
  store.dispatch(addToCart(data, index));
}
function dispatchShowProducts(data) {
  store.dispatch(addAllProducts(data));
}
function deleteProducts(data, index) {
  store.dispatch(deleteToCart(data, index));
}
function dispatchPlusProducts(data) {
  store.dispatch(plusProducts(data));
}
function dispatchMinusProducts(data) {
  store.dispatch(minusProducts(data));
}
export {
  dispatchAddToCart,
  dispatchShowProducts,
  deleteProducts,
  dispatchPlusProducts,
  dispatchMinusProducts,
  dispatchNewProducts,
  dispatchPhukien,
  dispatchBestSell
};
