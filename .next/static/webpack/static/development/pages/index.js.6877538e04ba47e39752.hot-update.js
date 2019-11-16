webpackHotUpdate("static\\development\\pages\\index.js",{

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
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          className: "img-phukien",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, data.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, data.gia.toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), __jsx("div", {
          className: "addcart",
          onClick: function onClick(e) {
            return dispatchBtnAction(data, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE"))));
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
            lineNumber: 76
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("img", {
          src: data.src,
          className: "img-phukien",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, data.ten), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx("strike", {
          style: {
            opacity: ".7"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, data.gia.toLocaleString(), " \u0111")), __jsx("span", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, (data.gia * 70 / 100).toLocaleString(), " \u0111"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), __jsx("div", {
          className: "addcart",
          onClick: function onClick(e) {
            return dispatchBtnAction(data, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "TH\xCAM V\xC0O GI\u1ECE")), __jsx("div", {
          className: "callout badge badge-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("div", {
          className: "badge-inner secondary on-sale",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, __jsx("span", {
          className: "onsale",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "-30%")))));
      });
      return __jsx("div", {
        id: "hompage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-header.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-footer.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-banner.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "./static/style-section.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "nguoibangiay.demo")), __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(_components_carousel_carousel_banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "section1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/title_block_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), __jsx("div", {
        className: "section-block1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("button", {
        className: "view-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Xem s\u1EA3n ph\u1EA9m"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/title_block_2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), __jsx("div", {
        className: "section-block2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("button", {
        className: "view-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Xem s\u1EA3n ph\u1EA9m"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("img", {
        src: "./static/img/title_block_3.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), __jsx("div", {
        className: "section-block3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("button", {
        className: "view-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Xem s\u1EA3n ph\u1EA9m")))))), __jsx(_components_carousel_carousel_sanphammoi__WEBPACK_IMPORTED_MODULE_15__["default"], {
        addToCart: dispatchBtnAction.bind(this) // cach 2 addToCart={(e)dispatchBtnAction.bind(this,e)}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), __jsx("div", {
        className: "section3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("button", {
        className: "title-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M PH\u1EE4 KI\u1EC6N")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "section-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, listphukien), __jsx("button", {
        className: "btn-viewall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "XEM T\u1EA4T C\u1EA2"), __jsx("div", {
        className: "banner-sale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("div", {
        className: "sale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "MY SNICKERS"), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "KHUY\u1EBEN M\xC3I ", __jsx("span", {
        style: {
          color: "yellow"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "GI\u1EA2M GI\xC1 50%")), __jsx("button", {
        className: "btn-viewall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "XEM S\u1EA2N PH\u1EA8M"))), __jsx("div", {
        className: "section3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("button", {
        className: "title-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "S\u1EA2N PH\u1EA8M GI\u1EA2M GI\xC1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        className: "section-phukien",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
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
//# sourceMappingURL=index.js.6877538e04ba47e39752.hot-update.js.map