webpackHotUpdate("static\\development\\pages\\shoes.js",{

/***/ "./pages/shoes.js":
/*!************************!*\
  !*** ./pages/shoes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_link_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/link-data */ "./components/link-data.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/index */ "./pages/actions/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\nguoibangiay.demo\\pages\\shoes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var Shoes =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Shoes, _React$Component);

  function Shoes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Shoes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Shoes).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggle", function () {
      return _this.setState({
        dropdownOpen: !_this.state.dropdownOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "customrange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "goPage", function () {
      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "sanphammoi?_page=2&_limit=4")).then(function (result) {
        return result.json();
      }).then(function (db) {
        return _this.setState({
          page: 2,
          btnactive1: false,
          btnactive2: true,
          allproducts: db
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "goPage1", function () {
      _this.setState({
        allproducts: _this.state.allproductspage1,
        btnactive1: true,
        btnactive2: false
      });
    });

    _this.state = {
      dropdownOpen: false,
      allproducts: [],
      allproductspage1: [],
      page: 1,
      customRange: 1000000,
      datakhuyenmai: [],
      datatintuc: [],
      btnactive1: true,
      btnactive2: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Shoes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dataproducts = []; // get data all products

      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "sanphammoi?_page=").concat(this.state.page, "&_limit=4")).then(function (result) {
        return result.json();
      }).then(function (db) {
        return db.map(function (data) {
          return dataproducts.push(data);
        });
      });
      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "sanphambanchay?_page=").concat(this.state.page, "&_limit=8")).then(function (result) {
        return result.json();
      }).then(function (db) {
        return db.map(function (data) {
          return dataproducts.push(data);
        });
      }); // end
      // get data product sale-off sidebar

      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "khuyenmai?_start=0&_limit=5")).then(function (result) {
        return result.json();
      }).then(function (db) {
        return _this2.setState({
          datakhuyenmai: db
        });
      }); // end
      // get data tintuc

      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "tintuc")).then(function (result) {
        return result.json();
      }).then(function (db) {
        return _this2.setState({
          datatintuc: db
        });
      });
      this.setState({
        allproducts: dataproducts,
        allproductspage1: dataproducts
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          dropdownOpen = _this$state.dropdownOpen,
          allproducts = _this$state.allproducts,
          customRange = _this$state.customRange,
          datakhuyenmai = _this$state.datakhuyenmai,
          datatintuc = _this$state.datatintuc,
          btnactive1 = _this$state.btnactive1,
          btnactive2 = _this$state.btnactive2;
      var listallproducts = allproducts.map(function (data, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          xs: "6",
          sm: "4",
          lg: "3",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, __jsx("div", {
          className: "products",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/detail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          className: "img-products",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        })), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, data.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, data.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), __jsx("button", {
          className: "addcart",
          onClick: _actions_index__WEBPACK_IMPORTED_MODULE_12__["dispatchAddToCart"].bind(_this3, data),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Th\xEAm v\xE0o gi\u1ECF")));
      });
      var listkhuyenmai = datakhuyenmai.map(function (data, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          lg: "12",
          key: index,
          className: "sidebar-khuyenmai",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Media"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Media"], {
          left: true,
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          alt: data.ten,
          className: "thumbnail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Media"], {
          body: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, data.ten), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, (data.gia * 70 / 100).toLocaleString(), " \u0111"))));
      });
      var listtintuc = datatintuc.map(function (data, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          lg: "12",
          key: index,
          className: "sidebar-khuyenmai",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Media"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Media"], {
          left: true,
          href: "#",
          className: "img-tintuc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          alt: data.ten,
          className: "thumbnail-tintuc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Media"], {
          body: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, __jsx("span", {
          className: "title-tintuc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, data.title))));
      });
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-header.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-footer.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-shoes.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Shoes")), __jsx(_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("div", {
        id: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx("div", {
        id: "breadcrumb-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("div", {
        id: "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "TRANG CH\u1EE6")), __jsx("span", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "/"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "SHOES")), __jsx("div", {
        id: "sort",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx("p", {
        id: "hienthiketqua",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Hi\u1EC3n th\u1ECB...trong...k\u1EBFt qu\u1EA3"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Dropdown"], {
        isOpen: dropdownOpen,
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Th\u1EE9 t\u1EF1 m\u1EB7c \u0111\u1ECBnh"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "M\u1EDBi nh\u1EA5t"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Th\u1EE9 t\u1EF1 theo \u0111i\u1EC3m \u0111\xE1nh gi\xE1"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Th\u1EE9 t\u1EF1 theo gi\xE1: Th\u1EA5p => Cao "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Th\u1EE9 t\u1EF1 theo gi\xE1: Cao => Th\u1EA5p "))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        lg: "3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "L\u1ECCC THEO GI\xC1"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CustomInput"], {
        type: "range",
        id: "exampleCustomRange",
        name: "customRange",
        value: customRange,
        min: "500",
        max: "2000000",
        onChange: this.customrange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        "for": "exampleCustomRange",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, customRange.toLocaleString(), " \u0111", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "secondary",
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "L\u1ECDc"))), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "KHUY\u1EC4N M\xC3I"), listkhuyenmai, __jsx("h6", {
        style: {
          padding: "1.5rem 0 .7rem 0",
          margin: "0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "TIN T\u1EE8C"), listtintuc), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        lg: "9",
        id: "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, listallproducts, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Pagination"], {
        className: "Pagenavigationexample",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationItem"], {
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationLink"], {
        previous: true,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationItem"], {
        active: btnactive1,
        onClick: this.goPage1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationItem"], {
        active: btnactive2,
        onClick: this.goPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "2")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationLink"], {
        next: true,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      })))))))));
    }
  }]);

  return Shoes;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Shoes);

/***/ })

})
//# sourceMappingURL=shoes.js.c080bed4f50696e35fea.hot-update.js.map