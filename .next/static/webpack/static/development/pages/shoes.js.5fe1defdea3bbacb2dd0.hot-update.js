webpackHotUpdate("static\\development\\pages\\shoes.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\nguoibangiay.demo\\components\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      status: "mobilenav"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "showSidebar",
    value: function showSidebar() {
      this.setState({
        status: "showmobilenav"
      });
      console.log("ok");
    }
  }, {
    key: "hideSidebar",
    value: function hideSidebar() {
      this.setState({
        status: "mobilenav"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cart = this.props.db.cart;
      var numberproducts = cart.filter(function (item, index) {
        return cart.indexOf(item) === index;
      });
      return __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("span", {
        className: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u0110\u0102NG NH\u1EACP/ \u0110\u0102NG K\xDD"), __jsx("img", {
        className: "show-sidebar",
        src: "./static/img/show-sidebar.png",
        onClick: this.showSidebar.bind(this),
        width: "40",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/snickers-3-logo.png",
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("span", {
        className: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("img", {
        className: "icon",
        src: "./static/img/search_icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), "Gi\u1ECF h\xE0ng"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("img", {
        className: "icon-cart",
        src: "./static/img/shopping_cart_icon.png",
        width: "40",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, numberproducts.length)))), __jsx("ul", {
        className: "menubar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Trang Ch\u1EE7"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Gi\u1EDBi Thi\u1EC7u")), __jsx("li", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/shoes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, " Gi\xE0y N\u1EEF")), __jsx("div", {
        className: "sub-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Classic"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "One star"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Chuck 07")))), __jsx("li", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/shoes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Gi\xE0y Nam")), __jsx("div", {
        className: "sub-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Classic"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "One star"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Chuck 07")))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Li\xEAn H\u1EC7")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Tin T\u1EE9c"))), __jsx("div", {
        className: this.state.status,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("ul", {
        className: "mobilenav1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("img", {
        className: "hide-sidebar",
        src: "./static/img/hide-sidebar.png",
        onClick: this.hideSidebar.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        placeholder: "T\xECm ki\u1EBFm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Trang Ch\u1EE7"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Gi\u1EDBi Thi\u1EC7u")), __jsx("li", {
        className: "menu-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/shoes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Gi\xE0y N\u1EEF ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx("img", {
        src: "./static/img/arrow-down.png",
        width: "15",
        height: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }))), __jsx("div", {
        className: "sub-menu2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Classic"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "One star"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Chuck 07")))), __jsx("li", {
        className: "menu-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/shoes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Gi\xE0y Nam ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), __jsx("img", {
        src: "./static/img/arrow-down.png",
        width: "15",
        height: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }))), __jsx("div", {
        className: "sub-menu2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Classic"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "One star"), __jsx("li", {
        className: "sub-menu1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Chuck 07")))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Li\xEAn H\u1EC7")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Tin T\u1EE9c")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "\u0110\u0103ng Nh\u1EADp")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    db: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, null)(Header));

/***/ })

})
//# sourceMappingURL=shoes.js.5fe1defdea3bbacb2dd0.hot-update.js.map