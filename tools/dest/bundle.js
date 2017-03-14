webpackJsonp([1],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 页面列表
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Pagelist = function (_Component) {
    _inherits(Pagelist, _Component);

    function Pagelist() {
        _classCallCheck(this, Pagelist);

        return _possibleConstructorReturn(this, (Pagelist.__proto__ || Object.getPrototypeOf(Pagelist)).apply(this, arguments));
    }

    _createClass(Pagelist, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container", id: "home" },
                _react2.default.createElement(
                    "table",
                    { className: "table" },
                    _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "th",
                                null,
                                "#"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "Name"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "type"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "desc"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "edit"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Pagelist;
}(_react.Component);

Pagelist.propTypes = {};

exports.default = Pagelist;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(59);

var _Header2 = _interopRequireDefault(_Header);

var _Pagelist = __webpack_require__(102);

var _Pagelist2 = _interopRequireDefault(_Pagelist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Pagelist2.default, null)
    );
};

exports.default = Root;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(58);

var _redux = __webpack_require__(27);

var _reactRedux = __webpack_require__(26);

var _reducer = __webpack_require__(57);

var _reducer2 = _interopRequireDefault(_reducer);

var _Root = __webpack_require__(103);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Root2.default, null)
), document.getElementById('root'));

/***/ })

},[229]);