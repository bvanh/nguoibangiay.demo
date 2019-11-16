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
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("img", {
          src: demo.src,
          className: "item-sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, demo.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, demo.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }), __jsx("div", {
          className: "addcart",
          onClick: function onClick() {
            return _this3.props.addToCart(demo);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE"))));
      });
      var listbestsell = dbbestsell.map(function (demo, index) {
        return __jsx("div", {
          key: index,
          className: "sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, __jsx("img", {
          src: demo.src,
          className: "item-sanphammoi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, demo.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, demo.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), __jsx("div", {
          className: "addcart",
          onClick: function onClick() {
            return _this3.props.addToCart(demo);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE"))));
      });
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        id: "showsanphammoi",
        name: "radio",
        defaultChecked: "checked",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), __jsx("label", {
        className: "btn-category",
        htmlFor: "showsanphammoi",
        onClick: this.show1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M M\u1EDAI NH\u1EA4T"), __jsx("input", {
        type: "radio",
        id: "showsanphambanchay",
        name: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), __jsx("label", {
        className: "btn-category",
        htmlFor: "showsanphambanchay",
        onClick: this.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y")), show ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), listnewproduct) : __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), listbestsell));
    }
  }]);

  return Showproduct;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_carousel_carousel_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/carousel/carousel-banner */ "./components/carousel/carousel-banner.js");
/* harmony import */ var _components_link_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/link-data */ "./components/link-data.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/index */ "./pages/store/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/index */ "./pages/actions/index.js");
/* harmony import */ var _components_carousel_carousel_sanphammoi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/carousel/carousel-sanphammoi */ "./components/carousel/carousel-sanphammoi.js");






var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\nguoibangiay.demo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;










function dispatchBtnAction(data) {
  _store_index__WEBPACK_IMPORTED_MODULE_13__["store"].dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_14__["setIdphukien"])(data));
  console.log(data);
}

var Homepage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Homepage, _React$Component);

  function Homepage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Homepage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Homepage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);

    _this.state = {
      dataphukien: [],
      datakhuyenmai: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Homepage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // get data phukien
      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "phukien")).then(function (result) {
        return result.json();
      }).then(function (data) {
        return _this2.setState({
          dataphukien: data
        });
      }); // get data khuyen mai

      fetch("".concat(_components_link_data__WEBPACK_IMPORTED_MODULE_11__["default"], "khuyenmai")).then(function (result) {
        return result.json();
      }).then(function (data) {
        return _this2.setState({
          datakhuyenmai: data
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log(this.props.db);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          dataphukien = _this$state.dataphukien,
          datakhuyenmai = _this$state.datakhuyenmai;
      var listphukien = dataphukien.map(function (data, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          xs: "6",
          sm: "4",
          lg: "3",
          key: index,
          className: "phukien",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          className: "img-phukien",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, data.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, data.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), __jsx("div", {
          className: "addcart",
          onClick: function onClick(e) {
            return dispatchBtnAction(data, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE")));
      });
      var listkhuyenmai = datakhuyenmai.map(function (data, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          xs: "6",
          sm: "4",
          lg: "3",
          key: index,
          className: "phukien",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          className: "img-phukien",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, data.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, __jsx("strike", {
          style: {
            opacity: ".7"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, data.gia.toLocaleString(), " \u0111")), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, (data.gia * 70 / 100).toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), __jsx("div", {
          className: "addcart",
          onClick: function onClick(e) {
            return dispatchBtnAction(data, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE")), __jsx("div", {
          className: "callout badge badge-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("div", {
          className: "badge-inner secondary on-sale",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("span", {
          className: "onsale",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "-30%"))));
      });
      return __jsx("div", {
        id: "hompage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-header.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-footer.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-banner.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-section.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "nguoibangiay.demo")), __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(_components_carousel_carousel_banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "section1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/title_block_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), __jsx("div", {
        className: "section-block1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("button", {
        className: "view-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Xem s\u1EA3n ph\u1EA9m"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/title_block_2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), __jsx("div", {
        className: "section-block2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("button", {
        className: "view-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Xem s\u1EA3n ph\u1EA9m"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/title_block_3.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), __jsx("div", {
        className: "section-block3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("button", {
        className: "view-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Xem s\u1EA3n ph\u1EA9m")))))), __jsx(_components_carousel_carousel_sanphammoi__WEBPACK_IMPORTED_MODULE_15__["default"], {
        addToCart: dispatchBtnAction.bind(this) // cach 2 addToCart={(e)dispatchBtnAction.bind(this,e)}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), __jsx("div", {
        className: "section3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("button", {
        className: "title-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M PH\u1EE4 KI\u1EC6N")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "section-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, listphukien), __jsx("button", {
        className: "btn-viewall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "XEM T\u1EA4T C\u1EA2"), __jsx("div", {
        className: "banner-sale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("div", {
        className: "sale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "MY SNICKERS"), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "KHUY\u1EBEN M\xC3I ", __jsx("span", {
        style: {
          color: "yellow"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "GI\u1EA2M GI\xC1 50%")), __jsx("button", {
        className: "btn-viewall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "XEM S\u1EA2N PH\u1EA8M"))), __jsx("div", {
        className: "section3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx("button", {
        className: "title-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M GI\u1EA2M GI\xC1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "section-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, listkhuyenmai)));
    }
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    db: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, null)(Homepage));

/***/ })

})
//# sourceMappingURL=index.js.204d3a4b9068551c19b4.hot-update.js.map