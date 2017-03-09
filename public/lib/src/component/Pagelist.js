/**
 * 页面列表
 */

import React, { Component, PropTypes } from 'react';
import { FETCH_PAGE_CODE } from '../store/request'
import { getPageType } from '../store/getInitState'

class Pagelist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageList: [],
            pageType: getPageType()
        }
    }
    
    componentDidMount() {
        FETCH_PAGE_CODE({
            type: 'search'
        }).then(data => {
            if(data.ok === 1) {
                this.setState({
                    pageList: data.data
                })
            }
        })
    }

    render() {

        let { pageList } = this.state

        let paddingStyle = {
            paddingTop: 60
        }

        let isShowList = true
        if(!pageList.length){
            isShowList = false
        }

        return (
            <div className="container" style={paddingStyle} id="home">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>type</th>
                            <th>desc</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    {isShowList && <tbody>
                        {   pageList.map( (item, index) => {
                                let {
                                    name,
                                    desc,
                                    type
                                } = item
                                let pageUrl = `/pages/${name}.html`
                                let pageTypeName = this.getTypeName(type)
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><a href={pageUrl} target="_blank">{name}.html</a></td>
                                        <td>{pageTypeName}</td>
                                        <td>{desc}</td>
                                        <td onClick={this.modifyClickHandle}>修改</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>}
                </table>
            </div>
        )
    }

    /**
     * 获取页面类型的名字
     */
    getTypeName = type => {
        let typeName = ''
        this.state.pageType.some( item => {
            if( item.id == type) {
                typeName = item.name
                return true
            }
        })
        return typeName
    }

    modifyClickHandle = e => {
        
    }
}

Pagelist.propTypes = {

}

export default Pagelist