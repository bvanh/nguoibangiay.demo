webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/actions/index.js":
/*!********************************!*\
  !*** ./pages/actions/index.js ***!
  \********************************/
/*! exports provided: setIdsanphammoi, setIdphukien, dispatchBtnAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIdsanphammoi", function() { return setIdsanphammoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIdphukien", function() { return setIdphukien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchBtnAction", function() { return dispatchBtnAction; });
function setIdsanphammoi(text) {
  return {
    type: "sanphammoi",
    db: text
  };
}
function setIdphukien(text) {
  return {
    type: "ADD_TOCART",
    db: text
  };
}
function dispatchBtnAction(data) {
  store.dispatch(setIdphukien(data));
}

/***/ })

})
//# sourceMappingURL=index.js.ec556e26a5d81a36ab15.hot-update.js.map