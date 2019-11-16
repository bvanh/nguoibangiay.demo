webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/carousel/carousel-sanphammoi.js":
/*!****************************************************!*\
  !*** ./components/carousel/carousel-sanphammoi.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showproduct; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _link_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../link-data */ "./components/link-data.js");








var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\nguoibangiay.demo\\components\\carousel\\carousel-sanphammoi.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var Showproduct =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Showproduct, _Component);

  function Showproduct(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Showproduct);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Showproduct).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggle", function () {
      _this.setState({
        tooltipOpen: !_this.state.tooltipOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "show", function () {
      _this.setState({
        show: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "show1", function () {
      _this.setState({
        show: true
      });
    });

    _this.state = {
      dbnewproduct: [],
      dbbestsell: [],
      show: true,
      color: "",
      tooltipOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Showproduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // get data sanphammoi
      fetch("".concat(_link_data__WEBPACK_IMPORTED_MODULE_10__["default"], "sanphammoi")).then(function (result) {
        return result.json();
      }).then(function (data) {
        return _this2.setState({
          dbnewproduct: data
        });
      }); // get data sanphambanchay

      fetch("".concat(_link_data__WEBPACK_IMPORTED_MODULE_10__["default"], "sanphambanchay")).then(function (result) {
        return result.json();
      }).then(function (data) {
        return _this2.setState({
          dbbestsell: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      };
      var _this$state = this.state,
          dbnewproduct = _this$state.dbnewproduct,
          dbbestsell = _this$state.dbbestsell,
          show = _this$state.show,
          color = _this$state.color,
          tooltipOpen = _this$state.tooltipOpen;
      var listnewproduct = dbnewproduct.map(function (demo, index) {
        return __jsx("div", {
          key: index,
          className: "sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("img", {
          src: demo.src,
          className: "item-sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, demo.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, demo.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), __jsx("span", {
          className: "add-to-cart-icon",
          onClick: function onClick() {
            return _this3.props.addToCart(demo);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx("img", {
          src: "../static/img/add-to-cart.jpg",
          width: "30",
          height: "30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        })), __jsx("span", {
          className: "search-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx("img", {
          src: "../static/img/search_icon2.png",
          width: "35",
          height: "30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        })), __jsx("div", {
          className: "addcart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE")));
      });
      var listbestsell = dbbestsell.map(function (demo, index) {
        return __jsx("div", {
          key: index,
          className: "sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, __jsx("img", {
          src: demo.src,
          className: "item-sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, demo.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, demo.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }), __jsx("span", {
          className: "add-to-cart-icon",
          onClick: function onClick() {
            return _this3.props.addToCart(demo);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, __jsx("img", {
          src: "../static/img/add-to-cart.jpg",
          width: "30",
          height: "30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        })), __jsx("span", {
          className: "search-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, __jsx("img", {
          src: "../static/img/search_icon2.png",
          width: "35",
          height: "30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        })), __jsx("div", {
          className: "addcart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, "Th\xEAm v\xE0o gi\u1ECF"), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "Xem chi ti\u1EBFt")));
      });
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        id: "showsanphammoi",
        name: "radio",
        defaultChecked: "checked",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), __jsx("label", {
        className: "btn-category",
        htmlFor: "showsanphammoi",
        onClick: this.show1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M M\u1EDAI NH\u1EA4T"), __jsx("input", {
        type: "radio",
        id: "showsanphambanchay",
        name: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), __jsx("label", {
        className: "btn-category",
        htmlFor: "showsanphambanchay",
        onClick: this.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y")), show ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), listnewproduct) : __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), listbestsell));
    }
  }]);

  return Showproduct;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.a2985806940a05791e68.hot-update.js.map