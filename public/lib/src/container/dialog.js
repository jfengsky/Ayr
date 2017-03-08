/**
 * 初始化弹出层组件
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../component/Modal'
import { FETCH_SAVE_CODE } from '../store/request'

const dialog = params =>  {
    let {title} = params
    let container = document.createElement('div')
    document.body.appendChild(container)
    const cancel = e => {
        ReactDOM.unmountComponentAtNode(container)
    }
    const saveCode = data => {
        FETCH_SAVE_CODE(data).then(_data => {
            console.log(_data)
        })
    }
    ReactDOM.render(
        <Modal 
            title={title}
            cancel={cancel}
            save={saveCode}
        />,
        container
    )
}

export default dialog