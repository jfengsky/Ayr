import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FETCH_APITYPE } from '../store/fetch'
import { searchApiType, modifyApiType } from '../action/api'
import Dialog from './Dialog';

class ApiContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            isShowDialog: false
        }
    }
    
    componentDidMount() {
        FETCH_APITYPE({
            type: 'search'
        }).then( data => {
            if(data.ok === 1){
                this.props.dispatch(searchApiType(data.data))
            }
        })
    }
    
    render() {
        let { apiType } = this.props
        return (
            <form>
                {
                    apiType.map(item => {
                        let {
                            id,
                            name,
                            kind,
                            desc,
                            path
                        } = item
                        return (
                            <div style={{marginBottom: 30}} key={item.id}>
                                <h4 onClick={this.addApi.bind(this, id)}>{name} <small>{path}</small></h4>
                                <p>{desc}</p>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <select className="form-control" style={{marginRight: 10}}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <button className="btn btn-warning" type="submit">编辑</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Dialog id={this.state.id} isShow={this.state.isShowDialog} />
            </form>
        )
    }

    addApi = e => {
        this.setState({
            id: e - 0,
            isShowDialog: true
        })
    }
}

ApiContent.propTypes = {
    // apiType
}

const mapStateToProps = state => {
    return {
        apiType: state.apiType
    }
}

ApiContent = connect(mapStateToProps)(ApiContent)

export default ApiContent