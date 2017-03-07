/**
 * Created by jiangfeng on 2017/2/24.
 */

import React from 'react'

export default class Todolist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: props.data
        }
    }
    render(){
        return (
            <div className="list">
                {
                    this.props.data.map( (item,index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
            </div>
        )
    }
}