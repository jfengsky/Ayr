/**
 * 接口类型编辑
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class ApiTypeContent extends Component {
    render() {
        return (
            <form className="form-inline" style={{marginTop:50}}>
                <h5>接口配置</h5>
                <div className="row">
                    <div className="col-xs-12" style={{ marginBottom: 10 }}>
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <input type="text" className="form-control" ref="apiName" placeholder="输入接口名称" style={{ marginRight: 10 }} />
                            <input type="text" className="form-control" ref="apiPath" placeholder="输入接口路径" style={{ marginRight: 10 }} />
                            <select className="form-control" ref="pageType">
                                { this.props.pageType.map(item => (<option value={item.id} key={item.id}>{item.name}</option>)) }
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">保存</button>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <select className="form-control">
                                <option>1111</option>
                            </select>
                        </div>
                        <div className="form-group">2222</div>
                        <button type="button" className="btn btn-danger">删除</button>
                    </div>
                </div>
            </form>
        );
    }
}

ApiTypeContent.propTypes = {
    pageType: PropTypes.array
}

const mapStateToProps = state => {
    return {
        pageType: state.pageType
    }
}

ApiTypeContent = connect(mapStateToProps)(ApiTypeContent)

export default ApiTypeContent