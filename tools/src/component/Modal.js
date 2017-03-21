import React, { Component, PropTypes } from 'react'
import { FETCH_APIINFO } from '../store/fetch'

class Modal extends Component {
    render() {
        let {id, name, path} = this.props.data
        return (
            <div className="modal" style={{display: 'block'}}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.props.close}><span>&times;</span></button>
                            <h4 className="modal-title">{name} <small>{path}</small></h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="control-label">接口描述:</label>
                                    <input type="text" className="form-control" ref="infoInput" />
                                </div>
                                {/*<div className="form-group">
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>*/}
                                <div className="form-group">
                                    <label htmlFor="message-text" className="control-label">内容:</label>
                                    <textarea className="form-control" ref="textInput"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.saveClickHandle}>保存</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    saveClickHandle = e => {
        let name = this.refs.infoInput.value.trim()
        let text = this.refs.textInput.value.trim()

        if(!name || !text){
            return false
        }

        FETCH_APIINFO({
            type: 'save',
            name,
            text,
            depend: this.props.data.id
        }).then( data => {
            debugger
        })


    }
}

Modal.propTypes = {
    // close
    // data
}

export default Modal