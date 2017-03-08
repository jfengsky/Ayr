/**
 * 一些编辑功能模块
 */

import React, { Component, PropTypes } from 'react'
import { FETCH_PAGETYPE } from '../store/request'
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typelist: []
        }
    }
    
    componentDidMount() {

        // 请求类型数据
        FETCH_PAGETYPE({
            type: 'search'
        }).then( data => {
            if(data.ok === 1) {
                this.setState({
                    typelist: data.data
                })
            }
        })
    }
    
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
                            <button type="button" className="btn btn-primary" onClick={this.clickSavePageHandle} disabled>保存</button>
                            { false && <button type="button" className="btn btn-primary" onClick={this.clickSearchPageHandle}>查询</button> }
                        </div>
                        { false &&  <div className="col-xs-12">
                                        <div className="form-group">
                                            <select className="form-control" style={{width: 170,marginRight: 10}} ref="selectPageType">
                                                {
                                                    this.state.typelist.map( ({name,id}, index) => <option value={id} key={index}>{name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <button type="button" className="btn btn-danger" onClick={this.clickDeletePageHandle}>删除</button>
                                    </div>
                        }
                    </div>
                    { false && <button type="button" className="btn btn-danger" onClick={this.clickCreateDB}>初始数据库</button> }
                </form>
            </div>
        )
    }

    clickSavePageHandle = e => {
        let value = this.refs.pageType.value.trim()
        if(value){
            FETCH_PAGETYPE({
                name: value,
                type: 'save'
            }).then( data => {
                if(data.ok === 1){
                    let {
                        typelist
                    } = this.state
                    typelist.push(data.data)
                    this.setState({
                        typelist
                    })
                    this.refs.pageType.value = ''
                }
            })
        }
    }

    /**
     * 初始化数据库，慎用
     */
    // clickCreateDB = e => {
    //     FETCH_CREATE_DB()
    // }

    /**
     * 查询页面类型
     */
    clickSearchPageHandle = e => {
        FETCH_PAGETYPE({
            type: 'search'
        }).then( data => {
            console.log(data)
        })
    }

    /**
     * 删除页面类型
     */
    clickDeletePageHandle = e => {
        let value = this.refs.selectPageType.value.trim() - 0
        if(value >= 0){
            FETCH_PAGETYPE({
                id: value,
                type: 'delete'
            }).then( data => {
                if(data.ok === 1){
                    let {
                        typelist
                    } = this.state

                    let delIndex = null
                    typelist.some(({id},index) => {
                        if(id === value) {
                            delIndex = index
                            return true
                        }
                    })

                    typelist.splice(delIndex,1)

                    this.setState({
                        typelist
                    })
                }
            })
        }
    }
}

Edit.propTypes = {

}

export default Edit