webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/index */ "./pages/actions/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\nguoibangiay.demo\\pages\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var Cart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, _React$Component);

  function Cart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).call(this, props));
    _this.state = {
      dataCart: _this.props.db.cart
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "render",
    value: function render() {
      var dataCart = this.state.dataCart;
      var bindCart = dataCart.filter(function (data, index) {
        return dataCart.indexOf(data) === index;
      });
      var num = [];
      var count = 1;

      for (var i = 0; i < dataCart.length; i += count) {
        count = 1;

        for (var j = i + 1; j < dataCart.length; j++) {
          if (dataCart[i] === dataCart[j]) {
            count++;
          }
        }

        num.push(count);
      }

      var totalPrice = 0;
      var printProduct = [];

      for (var _i = 0; _i < bindCart.length; _i++) {
        var data = bindCart[_i];
        totalPrice += data.gia * data.quantity;
        printProduct.push(__jsx("tr", {
          key: _i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("td", {
          style: {
            width: "50%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("img", {
          src: "../static/img/trash.png",
          style: {
            width: "6%",
            paddingRight: ".3rem",
            cursor: "pointer"
          },
          onClick: _actions_index__WEBPACK_IMPORTED_MODULE_10__["deleteProducts"].bind(this, data),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), __jsx("img", {
          src: data.src,
          style: {
            width: "30%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), __jsx("span", {
          id: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, data.ten)), __jsx("td", {
          id: "demo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, data.gia.toLocaleString(), " \u0111")), __jsx("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, __jsx("div", {
          id: "checksize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroupAddon"], {
          addonType: "prepend",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          color: "danger",
          onClick: _actions_index__WEBPACK_IMPORTED_MODULE_10__["dispatchMinusProducts"].bind(this, _i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "-")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
          defaultValue: num[_i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroupAddon"], {
          addonType: "append",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          color: "success",
          onClick: _actions_index__WEBPACK_IMPORTED_MODULE_10__["dispatchPlusProducts"].bind(this, _i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "+"))))), __jsx("td", {
          style: {
            textAlign: "right"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, (data.quantity * data.gia).toLocaleString(), " \u0111")));
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-header.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-footer.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-cart.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Products/Cart")), __jsx(_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        id: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        id: "breadcrumb-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("div", {
        id: "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "TRANG CH\u1EE6")), __jsx("span", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "/"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "SHOES"), __jsx("span", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "/"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "CART"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "S\u1EA3n ph\u1EA9m"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Gi\xE1"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "S\u1ED1 l\u01B0\u1EE3ng"), __jsx("th", {
        style: {
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "T\u1ED5ng"))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, printProduct))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("td", {
        style: {
          paddingTop: "1rem",
          paddingBottom: "0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "T\u1ED5ng ph\u1EE5"), __jsx("td", {
        className: "listright",
        style: {
          paddingTop: "1rem",
          paddingBottom: "0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, totalPrice.toLocaleString(), " \u0111")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Khuy\u1EC5n m\xE3i"), __jsx("td", {
        className: "listright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "0"))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Giao h\xE0ng"), __jsx("td", {
        className: "listright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Mi\u1EC5n ph\xED to\xE0n qu\u1ED1c"))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "T\u1ED5ng"), __jsx("td", {
        className: "listright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "0"))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "success",
        id: "btn-appcode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "\xC1P D\u1EE4NG")), __jsx("td", {
        className: "listright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "NH\u1EACP M\xC3 KHUY\u1EBEN M\xC3I",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/thanhtoan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "danger",
        id: "btn-thanhtoan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "TI\u1EBEN H\xC0NH THANH TO\xC1N")))))));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    db: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, null)(Cart));

/***/ })

})
//# sourceMappingURL=cart.js.38656c8d3f4663d67390.hot-update.js.map