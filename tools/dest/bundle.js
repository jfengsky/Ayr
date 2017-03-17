webpackJsonp([1],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _redux = __webpack_require__(19);

var _reactRedux = __webpack_require__(13);

var _reducer = __webpack_require__(29);

var _reducer2 = _interopRequireDefault(_reducer);

var _Root = __webpack_require__(108);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Root2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _fetch = __webpack_require__(23);

var _pageTypeReducer = __webpack_require__(41);

var _page = __webpack_require__(38);

var _filter = __webpack_require__(111);

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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _Pagelist = __webpack_require__(107);

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

/***/ 111:
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 所有Promise集合
 */

/*
通用接口返回:
    成功 { ok: 1, data:...}
    失败 { ok: 0, message: ....}
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

/**
 * 增删改查页面接口
 * @param {Object} data 
 * 传参说明:
    添加: {
        type: 'save',
        name: '',
        kind: '',
        desc: '',
        code: ''
    }

    修改: {
        type: 'modify',
        name: '',
        kind: '',
        desc: '',
        code: '',
        id
    }

    删除: {
        type: 'delete'
        id
    }

    查找: {
        type: 'search'
        id
    }
 */
var FETCH_PAGEINFO = exports.FETCH_PAGEINFO = function FETCH_PAGEINFO(data) {
    var setting = {
        url: '/pageType',
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

/**
 * 页面类型操作
 * @param {Object} data 
 * 传参说明
    添加: {
        type: 'save',
        name: '',
        kind: '',
        path: '',
        desc: ''
    }
 */

var FETCH_APITYPE = exports.FETCH_APITYPE = function FETCH_APITYPE(data) {
    var setting = {
        url: '/apiType',
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPageInfo = exports.savePage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pageReducer = __webpack_require__(40);

var savePage = exports.savePage = function savePage(data) {
    return _extends({}, data, {
        type: _pageReducer.SAVE_PAGE
    });
};

var getPageInfo = exports.getPageInfo = function getPageInfo(data) {
    return {
        data: data,
        type: _pageReducer.FETCH_PAGE_INFO
    };
};

/***/ })

},[236]);