/**
 * 一些编辑功能模块
 */

import React, { Component, PropTypes } from 'react';
import { FETCH_SAVE_PAGETYPE, FETCH_CREATE_DB, FETCH_SEARCH_PAGETYPE} from '../store/request'
class Edit extends Component {
    render() {
        return (
            <div>
                <form className="form-inline">
                    <h4>页面类型配置</h4>
                    <div className="row">
                        <div className="col-xs-12" style={{marginBottom: 10}}>
                            <div className="form-group" style={{marginRight: 10}}>
                                <input type="text" className="form-control" ref="pageType" placeholder="输入页面类型" />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.clickSavePageHandle}>保存</button>
                            <button type="button" className="btn btn-primary" onClick={this.clickSearchPageHandle}>保存</button>
                        </div>
                        <div className="col-xs-12">
                            <div className="form-group">
                                <select className="form-control" style={{width: 170,marginRight: 10}}>
                                    <option>详情页</option>
                                    <option>可选项页</option>
                                    <option>填写页</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-danger">删除</button>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={this.clickCreateDB}>初始数据库</button>
                </form>
            </div>
        )
    }

    clickSavePageHandle = e => {
        let value = this.refs.pageType.value.trim()
        if(value){
            FETCH_SAVE_PAGETYPE({value}).then(data =>{
                debugger
            })
        }
    }

    /**
     * 初始化数据库，慎用
     */
    clickCreateDB = e => {
        FETCH_CREATE_DB()
    }

    clickSearchPageHandle = e => {
        FETCH_SEARCH_PAGETYPE().then(data => {
            console.log(data)
        })
    }
}

Edit.propTypes = {

}

export default Edit