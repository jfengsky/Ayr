/**
 * 接口类型编辑
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FETCH_APITYPE } from '../store/fetch'
import { addApiType, searchApiType, deleteApiType } from '../action/api'

class ApiTypeInfo extends Component {
    render() {
        let { list, kind } = this.props
        if(kind >= 0) {
            kind = kind - 0
        } else {
            kind = list[0].id - 0
        }

        let apiInfo = {}

        list.some(item => {
            if(item.kind - 0 === kind) {
                apiInfo = item
                return true
            }
        })

        return (
            <div className="form-group">
                <p>{apiInfo.path}</p>
                <p>{apiInfo.desc}</p>
            </div>
        )
    }
}

ApiTypeInfo.propTypes = {

}

class ApiTypeContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTypeId: null
        }
    }
    
    componentDidMount() {
        FETCH_APITYPE({
            type: 'search'
        }).then( data => {
            if(data.ok === 1){
                this.props.dispatch(searchApiType(data.data))
            }
        })
    }
    
    render() {
        let { apiType, pageType } = this.props
        return (
            <form className="form-inline" style={{marginTop:50}}>
                <h5>接口配置</h5>
                <div className="row">
                    <div className="col-xs-12" style={{ marginBottom: 10 }}>
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <input type="text" className="form-control" ref="apiName" placeholder="输入接口名称" style={{ marginRight: 10 }} />
                            <input type="text" className="form-control" ref="apiPath" placeholder="输入接口路径" style={{ marginRight: 10 }} />
                            <select className="form-control" ref="pageType">
                                { pageType.map(item => (<option value={item.id} key={item.id}>{item.name}</option>)) }
                            </select>
                        </div>
                        
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input type="text" className="form-control" ref="apiDesc" placeholder="输入接口描述" style={{width: 500, marginRight: 10}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.saveApiType}>保存</button>
                    </div>
                    <div className="col-xs-12" style={{ marginTop: 40 }}>
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <select className="form-control" ref="selectApiName">
                                { apiType.map(item => (<option value={item.id} key={item.id}>{item.name}</option>))}
                            </select>
                        </div>
                        { !!apiType.length && <ApiTypeInfo list={apiType} kind={this.state.currentTypeId} /> }
                        <button type="button" className="btn btn-danger" onClick={this.delApiType}>删除</button>
                    </div>
                </div>
            </form>
        );
    }

    saveApiType = e => {
        let { apiName, apiPath, pageType, apiDesc } = this.refs
        let name = apiName.value
        let path = apiPath.value
        let kind = pageType.value - 0
        let desc = apiDesc.value
        if(!name || !path || !desc ){
            return false
        }
        
        FETCH_APITYPE({
            type: 'save',
            name,
            path,
            kind,
            desc
        }).then(data => {
            if(data.ok === 1) {
                this.props.dispatch(addApiType({name,path,kind,desc}))
            }
        })
    }

    delApiType = e => {
        let id = this.refs.selectApiName.value - 0
        FETCH_APITYPE({
            type: 'delete',
            id
        }).then(data => {
            if(data.ok === 1) {
                this.props.dispatch(deleteApiType({id}))
            }
        })
    }
}

ApiTypeContent.propTypes = {
    apiType: PropTypes.array,
    pageType: PropTypes.array
}

const mapStateToProps = state => {
    return {
        apiType: state.apiType,
        pageType: state.pageType
    }
}

ApiTypeContent = connect(mapStateToProps)(ApiTypeContent)

export default ApiTypeContent