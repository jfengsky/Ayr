/**
 * 录入页面
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { savePage } from '../action/page'
import { FETCH_PAGEINFO } from '../store/fetch'

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreatePage: false
        }
    }
    
    render() {
        let { showCreatePage } = this.state
        return (
            <div style={{ marginTop: 50 }}>
                <h5>创建页面</h5>
                <div className="btn-group" style={{marginBottom: 20, display: showCreatePage ? 'none' : ''}}>
                    <button type="button" className="btn btn-primary btn-lg dropdown-toggle" onClick={this.showCreatePage}>
                        <span className="glyphicon glyphicon-file" aria-hidden="true"></span> 创建
                    </button>
                </div>
                <form className="form-horizontal" style={{display: showCreatePage ? '' : 'none'}} onSubmit={this.savePage}>
                    <div className='form-group'>
                        <label htmlFor="pageName" className="col-sm-1 control-label">文件名</label>
                        <div className="col-sm-11">
                            <div className="input-group">
                                <input type="text" className="form-control" ref="pageName" placeholder="请输入文件名" />
                                <div className="input-group-addon">.html</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pageName" className="col-sm-1 control-label">页面类型</label>
                        <div className="col-sm-11">
                            <select className="form-control" ref="pageType" >
                                {this.props.pageType.map(item =>(<option value={item.id} key={item.id}>{item.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pageName" className="col-sm-1 control-label">页面描述</label>
                        <div className="col-sm-11">
                            <div className="input-group">
                                <input type="text" className="form-control" ref="pageDesc" placeholder="请输入页面描述" />
                                <div className="input-group-addon">.html</div>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="col-sm-12">
                            <textarea className="form-control" ref="pageCode" rows="10" placeholder="请粘贴代码"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary btn-lg dropdown-toggle">
                                    <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> 保存
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    showCreatePage = e => {
        this.setState({
            showCreatePage: true
        })
    }

    savePage = e => {
        let {
            pageName,
            pageType,
            pageDesc,
            pageCode
        } = this.refs
        let name = pageName.value.trim()
        let type = pageType.value - 0
        let desc = pageDesc.value.trim()
        let code = pageCode.value
        if(!name || !desc || !code){
            return false
        }
        FETCH_PAGEINFO({
            type: 'save',
            name,
            type,
            desc,
            code
        })
    }
}

PageContent.propTypes = {
    pageType: PropTypes.array
}

const mapStateToProps = state => {
    return {
        pageType: state.pageType
    }
}

PageContent = connect(mapStateToProps)(PageContent)

export default PageContent