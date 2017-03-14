/**
 * 页面类型编辑
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { SAVE_PAGETYPE, FETCH_PAGETYPELIST } from '../reducers/pageTypeReducer'
import { FETCH_PAGETYPE } from '../store/fetch'

class PageTypeContent extends Component {
    
    componentDidMount() {
        FETCH_PAGETYPE({
            type: 'search'
        }).then(data => {
            if(data.ok === 1){
                this.props.dispatch({
                    type: FETCH_PAGETYPELIST,
                    data: data.data
                })
            }
        })
    }
    
    render() {
        let { pageTypeList } = this.props
        return (
            <form className="form-inline">
                <h5>页面类型配置</h5>
                <div className="row">
                    <div className="col-xs-12" style={{ marginBottom: 10 }}>
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <input type="text" className="form-control" ref="pageType" placeholder="输入页面类型" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.clickSavePageHandle}>保存</button>
                        <button type="button" className="btn btn-primary">查询</button>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <select className="form-control" style={{ width: 170, marginRight: 10 }} ref="selectPageType">
                                { pageTypeList && pageTypeList.map(item => (<option value={item.id} key={item.id}>{item.name}</option>)) }
                            </select>
                        </div>
                        <button type="button" className="btn btn-danger" onClick={this.clickDeletePageHandle}>删除</button>
                    </div>
                </div>
            </form>
        );
    }

    clickSavePageHandle = e => {
        let value = this.refs.pageType.value.trim()
        if(value){
            FETCH_PAGETYPE({
                name: value,
                type: 'save'
            }).then( data => {
                if(data.ok === 1){
                    this.props.dispatch({
                        type: SAVE_PAGETYPE,
                        data: data.data
                    })
                    this.refs.pageType.value = ''
                }
            })
        }
    }

    clickDeletePageHandle = e => {
        
    }

}

PageTypeContent.propTypes = {
    // pageType: PropTypes.array.isRequired
}

const mapStateToProps = store => {
    return {
        pageTypeList: store.pageType
    }
}

// const mapDispatchToProps = dispatch => {
//     return 
// }

PageTypeContent = connect(mapStateToProps)(PageTypeContent)

export default PageTypeContent