/**
 * 新建页面表单
 */

import React, { Component, PropTypes } from 'react';
// import { FETCH_PAGETYPE } from '../store/request'
import { SET_INITSTATE } from '../store/setInitState'
import { getPageType } from '../store/getInitState'

class Modalpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typelist: getPageType(),
            nameError: false,
            descError: false,
            codeError: false
        }
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
                            <input type="text" className="form-control" ref="pageName" onFocus={this.pageNameFocus} onBlur={this.pageNameBlur} id="pageName" placeholder="请输入文件名" />
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
                        <input type="text" ref="pageDesc" className="form-control" ref="pageDesc" onFocus={this.pageDescFocus} onBlur={this.pageDescBlur} id="pageDesc" placeholder="请输入页面描述" />
                    </div>
                </div>
                <div className={codeError ? formErrorClassName : formClassName}>
                    <div className="col-sm-offset-2 col-sm-10">
                        <textarea className="form-control" ref="pageCode" onFocus={this.pageCodeFocus} onBlur={this.pageCodeBlur} rows="10" placeholder="请粘贴代码"></textarea>
                        <span>http://localhost:4000/</span>
                    </div>
                </div>
            </form>
        )
    }

    pageNameFocus = e => {
        this.setState({
            nameError: false
        })
    }

    pageNameBlur = e => {
        let value = this.refs.pageName.value.trim()
        if(value){
            SET_INITSTATE('mPageName', value)
        } else {
            this.setState({
                nameError: true
            })
        }
    }

    pageTypeChange = e => {
        SET_INITSTATE('mPageType', this.refs.pageType.value)
    }

    pageDescFocus = e =>{
        this.setState({
            descError: false
        })
    }

    pageDescBlur = e => {
        let value = this.refs.pageDesc.value.trim()
        if(value){
            SET_INITSTATE('mPageDesc', value)
        } else {
            this.setState({
                descError: true
            })
        }
    }
    
    pageCodeFocus = e => {
        this.setState({
            codeError: false
        })
    }

    pageCodeBlur = e => {
        let value = this.refs.pageCode.value.trim()
        if(value){
            SET_INITSTATE('mPageCode', value)
        } else {
            this.setState({
                codeError: true
            })
        }
    }
}

Modalpage.propTypes = {
    
}

export default Modalpage