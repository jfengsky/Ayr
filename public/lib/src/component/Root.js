import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar'
import Pagelist from './Pagelist'
import Apicontent from './Apicontent'
import Edit from './Edit'

class Root extends Component {
    render() {
        let { nav } = this.props.data
        return (
            <div>
                <Navbar list={nav} />
                <Pagelist />
                <Apicontent />
                <Edit />
            </div>
        )
    }
}

Root.propTypes = {
    data: PropTypes.object.isRequired
}

export default Root