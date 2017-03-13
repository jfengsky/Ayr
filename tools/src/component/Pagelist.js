/**
 * 页面列表
 */

import React, { Component, PropTypes } from 'react';

class Pagelist extends Component {
    render() {
        return (
            <div className="container" id="home">
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
                    {/*{isShowList && <tbody>
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
                                        <td>
                                            <span className="btn-link" onClick={this.modifyClickHandle.bind(this, item)}>修改</span>
                                            {' '}
                                            <span className="btn-link">删除</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>}*/}
                </table>
            </div>
        )
    }
}

Pagelist.propTypes = {

}

export default Pagelist;