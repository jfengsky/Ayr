webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _PageTypeContent = __webpack_require__(106);

var _PageTypeContent2 = _interopRequireDefault(_PageTypeContent);

var _ApiTypeContent = __webpack_require__(104);

var _ApiTypeContent2 = _interopRequireDefault(_ApiTypeContent);

var _PageContent = __webpack_require__(105);

var _PageContent2 = _interopRequireDefault(_PageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { type: 'edit' }),
        _react2.default.createElement(_PageTypeContent2.default, null),
        _react2.default.createElement(_ApiTypeContent2.default, null),
        _react2.default.createElement(_PageContent2.default, null)
    );
};

exports.default = Root;

/***/ }),

/***/ 104:
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

var _api = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 接口类型编辑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ApiTypeInfo = function (_Component) {
    _inherits(ApiTypeInfo, _Component);

    function ApiTypeInfo() {
        _classCallCheck(this, ApiTypeInfo);

        return _possibleConstructorReturn(this, (ApiTypeInfo.__proto__ || Object.getPrototypeOf(ApiTypeInfo)).apply(this, arguments));
    }

    _createClass(ApiTypeInfo, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                list = _props.list,
                kind = _props.kind;

            if (kind >= 0) {
                kind = kind - 0;
            } else {
                kind = list[0].id - 0;
            }

            var apiInfo = {};

            list.some(function (item) {
                if (item.kind - 0 === kind) {
                    apiInfo = item;
                    return true;
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                    'p',
                    null,
                    apiInfo.path
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    apiInfo.desc
                )
            );
        }
    }]);

    return ApiTypeInfo;
}(_react.Component);

ApiTypeInfo.propTypes = {};

var ApiTypeContent = function (_Component2) {
    _inherits(ApiTypeContent, _Component2);

    function ApiTypeContent(props) {
        _classCallCheck(this, ApiTypeContent);

        var _this2 = _possibleConstructorReturn(this, (ApiTypeContent.__proto__ || Object.getPrototypeOf(ApiTypeContent)).call(this, props));

        _this2.saveApiType = function (e) {
            var _this2$refs = _this2.refs,
                apiName = _this2$refs.apiName,
                apiPath = _this2$refs.apiPath,
                pageType = _this2$refs.pageType,
                apiDesc = _this2$refs.apiDesc;

            var name = apiName.value;
            var path = apiPath.value;
            var kind = pageType.value - 0;
            var desc = apiDesc.value;
            if (!name || !path || !desc) {
                return false;
            }

            (0, _fetch.FETCH_APITYPE)({
                type: 'save',
                name: name,
                path: path,
                kind: kind,
                desc: desc
            }).then(function (data) {
                if (data.ok === 1) {
                    _this2.props.dispatch((0, _api.addApiType)({ name: name, path: path, kind: kind, desc: desc }));
                }
            });
        };

        _this2.delApiType = function (e) {
            var id = _this2.refs.selectApiName.value - 0;
            (0, _fetch.FETCH_APITYPE)({
                type: 'delete',
                id: id
            }).then(function (data) {
                if (data.ok === 1) {
                    _this2.props.dispatch((0, _api.deleteApiType)({ id: id }));
                }
            });
        };

        _this2.state = {
            currentTypeId: null
        };
        return _this2;
    }

    _createClass(ApiTypeContent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            (0, _fetch.FETCH_APITYPE)({
                type: 'search'
            }).then(function (data) {
                if (data.ok === 1) {
                    _this3.props.dispatch((0, _api.searchApiType)(data.data));
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                apiType = _props2.apiType,
                pageType = _props2.pageType;

            return _react2.default.createElement(
                'form',
                { className: 'form-inline', style: { marginTop: 50 } },
                _react2.default.createElement(
                    'h5',
                    null,
                    '\u63A5\u53E3\u914D\u7F6E'
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
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'apiName', placeholder: '\u8F93\u5165\u63A5\u53E3\u540D\u79F0', style: { marginRight: 10 } }),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'apiPath', placeholder: '\u8F93\u5165\u63A5\u53E3\u8DEF\u5F84', style: { marginRight: 10 } }),
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', ref: 'pageType' },
                                pageType.map(function (item) {
                                    return _react2.default.createElement(
                                        'option',
                                        { value: item.id, key: item.id },
                                        item.name
                                    );
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'apiDesc', placeholder: '\u8F93\u5165\u63A5\u53E3\u63CF\u8FF0', style: { width: 500, marginRight: 10 } })
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.saveApiType },
                            '\u4FDD\u5B58'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-12', style: { marginTop: 40 } },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group', style: { marginRight: 10 } },
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', ref: 'selectApiName' },
                                apiType.map(function (item) {
                                    return _react2.default.createElement(
                                        'option',
                                        { value: item.id, key: item.id },
                                        item.name
                                    );
                                })
                            )
                        ),
                        !!apiType.length && _react2.default.createElement(ApiTypeInfo, { list: apiType, kind: this.state.currentTypeId }),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-danger', onClick: this.delApiType },
                            '\u5220\u9664'
                        )
                    )
                )
            );
        }
    }]);

    return ApiTypeContent;
}(_react.Component);

ApiTypeContent.propTypes = {
    apiType: _react.PropTypes.array,
    pageType: _react.PropTypes.array
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        apiType: state.apiType,
        pageType: state.pageType
    };
};

ApiTypeContent = (0, _reactRedux.connect)(mapStateToProps)(ApiTypeContent);

exports.default = ApiTypeContent;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _page = __webpack_require__(38);

var _fetch = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 录入页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PageContent = function (_Component) {
    _inherits(PageContent, _Component);

    function PageContent(props) {
        _classCallCheck(this, PageContent);

        var _this = _possibleConstructorReturn(this, (PageContent.__proto__ || Object.getPrototypeOf(PageContent)).call(this, props));

        _this.showCreatePage = function (e) {
            _this.setState({
                showCreatePage: true
            });
        };

        _this.savePage = function (e) {
            var _this$refs = _this.refs,
                pageName = _this$refs.pageName,
                pageType = _this$refs.pageType,
                pageDesc = _this$refs.pageDesc,
                pageCode = _this$refs.pageCode;

            var name = pageName.value.trim();
            var type = pageType.value - 0;
            var desc = pageDesc.value.trim();
            var code = pageCode.value;
            if (!name || !desc || !code) {
                return false;
            }
            (0, _fetch.FETCH_PAGEINFO)({
                type: 'save',
                name: name,
                kind: type,
                desc: desc,
                code: code
            });
        };

        _this.state = {
            showCreatePage: false
        };
        return _this;
    }

    _createClass(PageContent, [{
        key: 'render',
        value: function render() {
            var showCreatePage = this.state.showCreatePage;

            return _react2.default.createElement(
                'div',
                { style: { marginTop: 50 } },
                _react2.default.createElement(
                    'h5',
                    null,
                    '\u521B\u5EFA\u9875\u9762'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', style: { marginBottom: 20, display: showCreatePage ? 'none' : '' } },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-primary btn-lg dropdown-toggle', onClick: this.showCreatePage },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-file', 'aria-hidden': 'true' }),
                        ' \u521B\u5EFA'
                    )
                ),
                _react2.default.createElement(
                    'form',
                    { className: 'form-horizontal', style: { display: showCreatePage ? '' : 'none' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'pageName', className: 'col-sm-1 control-label' },
                            '\u6587\u4EF6\u540D'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-11' },
                            _react2.default.createElement(
                                'div',
                                { className: 'input-group' },
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'pageName', placeholder: '\u8BF7\u8F93\u5165\u6587\u4EF6\u540D' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'input-group-addon' },
                                    '.html'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'pageName', className: 'col-sm-1 control-label' },
                            '\u9875\u9762\u7C7B\u578B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-11' },
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', ref: 'pageType' },
                                this.props.pageType.map(function (item) {
                                    return _react2.default.createElement(
                                        'option',
                                        { value: item.id, key: item.id },
                                        item.name
                                    );
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'pageName', className: 'col-sm-1 control-label' },
                            '\u9875\u9762\u63CF\u8FF0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-11' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'pageDesc', placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u63CF\u8FF0' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-12' },
                            _react2.default.createElement('textarea', { className: 'form-control', ref: 'pageCode', rows: '10', placeholder: '\u8BF7\u7C98\u8D34\u4EE3\u7801' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'btn-group' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-primary btn-lg dropdown-toggle', onClick: this.savePage },
                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-floppy-disk', 'aria-hidden': 'true' }),
                                    ' \u4FDD\u5B58'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PageContent;
}(_react.Component);

PageContent.propTypes = {
    pageType: _react.PropTypes.array
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        pageType: state.pageType
    };
};

PageContent = (0, _reactRedux.connect)(mapStateToProps)(PageContent);

exports.default = PageContent;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _pageTypeReducer = __webpack_require__(41);

var _fetch = __webpack_require__(23);

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
        }, _this.clickDeletePageHandle = function (e) {
            var id = _this.refs.selectPageType.value - 0;
            if (id >= 0) {
                (0, _fetch.FETCH_PAGETYPE)({
                    id: id,
                    type: 'delete'
                }).then(function (data) {
                    if (data.ok === 1) {
                        _this.props.dispatch({
                            type: _pageTypeReducer.DELETE_PAGETYPE,
                            id: id
                        });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
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
                        )
                    ),
                    false && _react2.default.createElement(
                        'div',
                        { className: 'col-xs-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', style: { width: 170, marginRight: 10 }, ref: 'selectPageType' },
                                pageTypeList.map(function (item) {
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
    pageTypeList: _react.PropTypes.array
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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _redux = __webpack_require__(19);

var _reactRedux = __webpack_require__(13);

var _reducer = __webpack_require__(29);

var _reducer2 = _interopRequireDefault(_reducer);

var _Edit = __webpack_require__(103);

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Edit2.default, null)
), document.getElementById('root'));

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

},[235]);