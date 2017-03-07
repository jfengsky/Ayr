/**
 * 主tab模块
 */

import React, { Component, PropTypes } from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data
        }
    }
    render() {
        let { list } = this.state
        return (
            <div>
                <ul className="nav nav-tabs">
                    {
                        list.map( (item, index) => {
                            let {name, tag, select} = item
                            return (
                                <li onClick={this.tabChange} className={ select ? "active": ''} key={index}>
                                    <a href={`#${tag}`} aria-controls={tag}>{name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="tab-content">
                    {
                        list.map((item, index) => {
                            let {tag, select} = item
                            let activeClass = select ? "active": ''
                            let activeClassName = `tab-pane ${activeClass}`
                            return (
                                <div className={activeClassName} id={tag} key={index}>index</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    tabChange = e => {
        alert(111)
    }
}

Tab.propTypes = {
    data: React.PropTypes.array.isRequired
}

export default Tab