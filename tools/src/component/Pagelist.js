/**
 * 页面列表
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { FETCH_PAGEINFO , FETCH_PAGETYPE} from '../store/fetch'
import { FETCH_PAGETYPELIST } from '../reducers/pageTypeReducer'
import { getPageInfo } from '../action/page'
import { getPageTypeName } from '../util/filter'

class Pagelist extends Component {
    componentDidMount() {

        FETCH_PAGETYPE({
            type: 'search'
        }).then(data => {
            if (data.ok === 1) {
                this.props.dispatch({
                    type: FETCH_PAGETYPELIST,
                    data: data.data
                })

                FETCH_PAGEINFO({
                    type: 'search'
                }).then( data => {
                    if(data.ok){
                        this.props.dispatch(getPageInfo(data.data))
                    }
                })

            }
        })

        // FETCH_PAGEINFO({
        //     type: 'search'
        // }).then( data => {
        //     if(data.ok){
        //         this.props.dispatch(getPageInfo(data.data))
        //     }
        // })
    }
    
    render() {
        let { pageList, pageType } = this.props
        let isShowList = true
        return (
            <div className="container" id="home">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>kind</th>
                            <th>desc</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    {isShowList && <tbody>
                        {   pageList.map( (item, index) => {
                                let {
                                    name,
                                    desc,
                                    kind
                                } = item
                                let pageUrl = `/pages/${name}.html`
                                let pageTypeName = getPageTypeName(pageType, kind - 0)
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><a href={pageUrl} target="_blank">{name}.html</a></td>
                                        <td>{pageTypeName}</td>
                                        <td>{desc}</td>
                                        <td>
                                            <span className="btn-link">修改</span>
                                            {' '}
                                            <span className="btn-link">删除</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>}
                </table>
            </div>
        )
    }
}

Pagelist.propTypes = {
    Pagelist: PropTypes.array
}

const mapStateToProps = store => {
    return {
        pageType: store.pageType,
        pageList: store.pageList
    }
}

Pagelist = connect(mapStateToProps)(Pagelist)

export default Pagelist