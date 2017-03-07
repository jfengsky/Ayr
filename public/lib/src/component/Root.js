import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar'
import Pagelist from './Pagelist'
import Apicontent from './Apicontent'

class Root extends Component {
    render() {
        let { nav } = this.props.data
        return (
            <div>
                <Navbar list={nav} />
                <Pagelist />
                <Apicontent />
            </div>
        )
    }
}

// Root.propTypes = {
//     data: React.propTypes.Object.require
// }

export default Root