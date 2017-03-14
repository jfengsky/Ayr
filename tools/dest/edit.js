webpackJsonp([1],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(58);

var _redux = __webpack_require__(33);

var _reactRedux = __webpack_require__(32);

var _reducer = __webpack_require__(57);

var _reducer2 = _interopRequireDefault(_reducer);

var _Edit = __webpack_require__(98);

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Edit2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _PageTypeContent = __webpack_require__(226);

var _PageTypeContent2 = _interopRequireDefault(_PageTypeContent);

var _ApiTypeContent = __webpack_require__(227);

var _ApiTypeContent2 = _interopRequireDefault(_ApiTypeContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageType = function (_Component) {
    _inherits(PageType, _Component);

    function PageType() {
        _classCallCheck(this, PageType);

        return _possibleConstructorReturn(this, (PageType.__proto__ || Object.getPrototypeOf(PageType)).apply(this, arguments));
    }

    _createClass(PageType, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PageTypeContent2.default, null),
                _react2.default.createElement(_ApiTypeContent2.default, null)
            );
        }
    }]);

    return PageType;
}(_react.Component);

PageType.propTypes = {};

exports.default = PageType;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(32);

var _pageTypeReducer = __webpack_require__(229);

var _fetch = __webpack_require__(228);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 页面类型编辑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PageTypeContent = function (_Component) {
    _inherits(PageTypeContent, _Component);

    function PageTypeContent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PageTypeContent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageTypeContent.__proto__ || Object.getPrototypeOf(PageTypeContent)).call.apply(_ref, [this].concat(args))), _this), _this.clickSavePageHandle = function (e) {
            var value = _this.refs.pageType.value.trim();
            if (value) {
                (0, _fetch.FETCH_PAGETYPE)({
                    name: value,
                    type: 'save'
                }).then(function (data) {
                    if (data.ok === 1) {
                        _this.props.dispatch({
                            type: _pageTypeReducer.SAVE_PAGETYPE,
                            data: data.data
                        });
                        _this.refs.pageType.value = '';
                    }
                });
            }
        }, _this.clickDeletePageHandle = function (e) {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PageTypeContent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _fetch.FETCH_PAGETYPE)({
                type: 'search'
            }).then(function (data) {
                if (data.ok === 1) {
                    _this2.props.dispatch({
                        type: _pageTypeReducer.FETCH_PAGETYPELIST,
                        data: data.data
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var pageTypeList = this.props.pageTypeList;

            return _react2.default.createElement(
                'form',
                { className: 'form-inline' },
                _react2.default.createElement(
                    'h5',
                    null,
                    '\u9875\u9762\u7C7B\u578B\u914D\u7F6E'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-12', style: { marginBottom: 10 } },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group', style: { marginRight: 10 } },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'pageType', placeholder: '\u8F93\u5165\u9875\u9762\u7C7B\u578B' })
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.clickSavePageHandle },
                            '\u4FDD\u5B58'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary' },
                            '\u67E5\u8BE2'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', style: { width: 170, marginRight: 10 }, ref: 'selectPageType' },
                                pageTypeList && pageTypeList.map(function (item) {
                                    return _react2.default.createElement(
                                        'option',
                                        { value: item.id, key: item.id },
                                        item.name
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-danger', onClick: this.clickDeletePageHandle },
                            '\u5220\u9664'
                        )
                    )
                )
            );
        }
    }]);

    return PageTypeContent;
}(_react.Component);

PageTypeContent.propTypes = {
    // pageType: PropTypes.array.isRequired
};

var mapStateToProps = function mapStateToProps(store) {
    return {
        pageTypeList: store.pageType
    };
};

// const mapDispatchToProps = dispatch => {
//     return 
// }

PageTypeContent = (0, _reactRedux.connect)(mapStateToProps)(PageTypeContent);

exports.default = PageTypeContent;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 接口类型编辑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ApiTypeContent = function (_Component) {
    _inherits(ApiTypeContent, _Component);

    function ApiTypeContent() {
        _classCallCheck(this, ApiTypeContent);

        return _possibleConstructorReturn(this, (ApiTypeContent.__proto__ || Object.getPrototypeOf(ApiTypeContent)).apply(this, arguments));
    }

    _createClass(ApiTypeContent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'api'
            );
        }
    }]);

    return ApiTypeContent;
}(_react.Component);

ApiTypeContent.propTypes = {};

exports.default = ApiTypeContent;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 所有Promise集合
 */

/**
 * 页面类型接口
 * @param {Object} data 
 *  传参说明:
 *      添加: {
 *               type: 'save',
 *               name: '产品详情页'
 *            }
 *      查找: {
 *              type: 'search'
 *            }
 *      删除: {
 *              type: 'delete',
 *              id: 1
 *            }
 * @return PromiseObject
 *      
 */
var FETCH_PAGETYPE = exports.FETCH_PAGETYPE = function FETCH_PAGETYPE(data) {
    var setting = {
        url: '/pagetype',
        type: 'post',
        data: data,
        dataType: 'json'
    };
    return new Promise(function (resolve, reject) {
        $.ajax(setting).done(function (data) {
            resolve(data);
        }).fail(function (data) {
            reject(data);
        });
    });
};

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(59);

var _Header2 = _interopRequireDefault(_Header);

var _PageType = __webpack_require__(225);

var _PageType2 = _interopRequireDefault(_PageType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { type: 'edit' }),
        _react2.default.createElement(_PageType2.default, null)
    );
};

exports.default = Root;

/***/ })

},[223]);