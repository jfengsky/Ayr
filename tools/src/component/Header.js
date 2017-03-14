/**
 * 顶部导航栏
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        let {nav, type} = this.props
        nav = this.resetSelect(nav, type)
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">Ayr</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {
                                nav.map((item,index) => {
                                    let {name, tag, select} = item
                                    return (
                                        <li className={ select ? "active": '' } key={index}>
                                            <a href={`/${tag}`}>{name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    resetSelect = (nav, type) => {
        if(!type){
            return nav
        }
        nav.map( item => {
            item.select = false
            if(type && item.tag === type){
                item.select = true
            }
        })
        return nav
    }
}

const mapStateToProps = (store, ownProps) => {
    
    return {
        ...ownProps,
        nav: store.pageTypeReducer.nav
    }
}

Header.propTypes = {
    nav: PropTypes.array.isRequired,
    type: PropTypes.string
}

Header = connect(mapStateToProps)(Header)

export default Header