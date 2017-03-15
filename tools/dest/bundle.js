webpackJsonp([1],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _fetch = __webpack_require__(61);

var _pageTypeReducer = __webpack_require__(60);

var _page = __webpack_require__(100);

var _filter = __webpack_require__(233);

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

                    (0, _fetch.FETCH_PAGEINFO)({
                        type: 'search'
                    }).then(function (data) {
                        if (data.ok) {
                            _this2.props.dispatch((0, _page.getPageInfo)(data.data));
                        }
                    });
                }
            });

            // FETCH_PAGEINFO({
            //     type: 'search'
            // }).then( data => {
            //     if(data.ok){
            //         this.props.dispatch(getPageInfo(data.data))
            //     }
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                pageList = _props.pageList,
                pageType = _props.pageType;

            var isShowList = true;
            return _react2.default.createElement(
                'div',
                { className: 'container', id: 'home' },
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '#'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'kind'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'desc'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'edit'
                            )
                        )
                    ),
                    isShowList && _react2.default.createElement(
                        'tbody',
                        null,
                        pageList.map(function (item, index) {
                            var name = item.name,
                                desc = item.desc,
                                kind = item.kind;

                            var pageUrl = '/pages/' + name + '.html';
                            var pageTypeName = (0, _filter.getPageTypeName)(pageType, kind - 0);
                            return _react2.default.createElement(
                                'tr',
                                { key: index },
                                _react2.default.createElement(
                                    'th',
                                    { scope: 'row' },
                                    index + 1
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: pageUrl, target: '_blank' },
                                        name,
                                        '.html'
                                    )
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    pageTypeName
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    desc
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'btn-link' },
                                        '\u4FEE\u6539'
                                    ),
                                    ' ',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'btn-link' },
                                        '\u5220\u9664'
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Pagelist;
}(_react.Component);

Pagelist.propTypes = {
    Pagelist: _react.PropTypes.array
};

var mapStateToProps = function mapStateToProps(store) {
    return {
        pageType: store.pageType,
        pageList: store.pageList
    };
};

Pagelist = (0, _reactRedux.connect)(mapStateToProps)(Pagelist);

exports.default = Pagelist;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(59);

var _Header2 = _interopRequireDefault(_Header);

var _Pagelist = __webpack_require__(104);

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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 根据类型id获取页面类型的中文名
 * @param {Array} pageType 类型列表
 * @param {Number} type 
 * @return {String} 
 */
var getPageTypeName = exports.getPageTypeName = function getPageTypeName(pageType, type) {
    return pageType.map(function (_ref) {
        var name = _ref.name,
            id = _ref.id;

        if (id === type) {
            return name;
        }
    });
};

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(58);

var _redux = __webpack_require__(27);

var _reactRedux = __webpack_require__(18);

var _reducer = __webpack_require__(57);

var _reducer2 = _interopRequireDefault(_reducer);

var _Root = __webpack_require__(105);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Root2.default, null)
), document.getElementById('root'));

/***/ })

},[232]);