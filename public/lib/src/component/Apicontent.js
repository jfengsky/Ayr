import React, { Component, PropTypes } from 'react';

class Apicontent extends Component {
    render() {
        let paddingStyle = {
            paddingLeft: 20
        }
        return (
            <div id="api">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-lg dropdown-toggle" onClick={this.createClickHandle}>
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> 创建
                    </button>
                </div>
                <div className="btn-group" style={paddingStyle}>
                    <button type="button" className="btn btn-danger btn-lg dropdown-toggle">
                        <span className="glyphicon glyphicon-remove"></span> 删除
                    </button>
                </div>
            </div>
        )
    }
    createClickHandle = e => {
        
    }
}

Apicontent.propTypes = {

}

export default Apicontent