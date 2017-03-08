/**
 * 新建页面表单
 */

import React, { Component, PropTypes } from 'react';
import { FETCH_PAGETYPE } from '../store/request'
import { SET_INITSTATE } from '../store/setInitState'

class Modalpage extends Component {
    constructor(props) {
        super(props)
        let {
            nameError,
            descError,
            codeError
        } = props
        this.state = {
            typelist: [],
            nameError,
            descError,
            codeError
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps
        })
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
        let { nameError, descError, codeError} = this.state
        let formClassName = 'form-group'
        let formErrorClassName = `${formClassName} has-error`

        return (
            <form className="form-horizontal">
                <div className={nameError ? formErrorClassName : formClassName}>
                    <label htmlFor="pageName" className="col-sm-2 control-label">文件名</label>
                    <div className="col-sm-10">
                        <div className="input-group">
                            <input type="text" className="form-control" ref="pageName" onBlur={this.pageNameBlur} id="pageName" placeholder="请输入文件名" />
                            <div className="input-group-addon">.html</div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <select className="form-control" ref="pageType" onChange={this.pageTypeChange}>
                            {
                                this.state.typelist.map( ({name,id}, index) => <option value={id} key={index}>{name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className={descError ? formErrorClassName : formClassName}>
                    <label htmlFor="pageDesc" className="col-sm-2 control-label">页面描述</label>
                    <div className="col-sm-10">
                        <input type="text" ref="pageDesc" className="form-control" ref="pageDesc" onBlur={this.pageDescBlur} id="pageDesc" placeholder="请输入页面描述" />
                    </div>
                </div>
                <div className={codeError ? formErrorClassName : formClassName}>
                    <div className="col-sm-offset-2 col-sm-10">
                        <textarea className="form-control" ref="pageCode" onBlur={this.pageCodeBlur} rows="10" placeholder="请粘贴代码"></textarea>
                    </div>
                </div>
            </form>
        )
    }

    pageNameBlur = e => {
        let value = this.refs.pageName.value.trim()
        if(value){
            SET_INITSTATE('mPageName', value)
        }
    }

    pageTypeChange = e => {
        SET_INITSTATE('mPageType', this.refs.pageType.value)
    }

    pageDescBlur = e => {
        let value = this.refs.pageDesc.value.trim()
        if(value){
            SET_INITSTATE('mPageDesc', value)
        }
    }
    
    pageCodeBlur = e => {
        let value = this.refs.pageCode.value.trim()
        if(value){
            SET_INITSTATE('mPageCode', value)
        }
    }
}

Modalpage.propTypes = {
    codeError: PropTypes.bool,
    descError: PropTypes.bool,
    codeError: PropTypes.bool
}

export default Modalpage