/**
 * 弹出层组件
 */

import React, { Component, PropTypes } from 'react';
import Modalpage from './Modalpage'
import { getPageCode } from '../store/getInitState'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameError: false,
            descError: false,
            codeError: false
        }
    }
    
    render() {
        let { cancel, title, save } = this.props
        let { nameError, descError, codeError } = this.state
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
                            <Modalpage
                                nameError={nameError}
                                descError={descError}
                                codeError={codeError}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={cancel}>取消</button>
                            <button type="button" className="btn btn-primary" onClick={this.save}>保存</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    save = e => {
        let {
            pageName,
            pageType,
            pageDesc,
            pageCode
        } = getPageCode()

        // 表单验证，不能为空
        if( !pageName || !pageDesc || !pageCode ){
            this.setState({
                nameError: !pageName,
                descError: !pageDesc,
                codeError: !pageCode
            })
            return false
        }

        this.save({
            pageName,
            pageType,
            pageDesc,
            pageCode
        })
    }
}

Modal.propTypes = {
    cancel: PropTypes.func,
    save: PropTypes.func,
    title: PropTypes.string.isRequired
}

export default Modal