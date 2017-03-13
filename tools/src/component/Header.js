/**
 * 顶部导航栏
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">Ayr</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {
                                this.props.nav.map((item,index) => {
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
        );
    }
}

const mapStateToProps = (store) => {
    return {
        nav: store.nav
    }
}

Header.propTypes = {
    nav: PropTypes.array.isRequired
}

Header = connect(mapStateToProps)(Header)

export default Header