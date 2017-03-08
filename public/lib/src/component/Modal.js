/**
 * 弹出层组件
 */

import React, { Component, PropTypes } from 'react';
import Modalpage from './Modalpage'

class Modal extends Component {
        
    render() {
        let { cancel, title } = this.props
        return (
            <div className="modal fade in" style={{display: 'block',backgroundColor: 'rgba(0,0,0,.5)'}}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={cancel}>
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myLargeModalLabel">{title}</h4>
                        </div>
                        <div className="modal-body">
                            <Modalpage />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={cancel}>取消</button>
                            <button type="button" className="btn btn-primary">保存</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    cancel: PropTypes.func,
    title: PropTypes.string.isRequired
}

export default Modal