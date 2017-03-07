/**
 * 初始化弹出层组件
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../component/Modal'

const dialog = params =>  {
    let {title} = params
    let container = document.createElement('div')
    document.body.appendChild(container)
    const cancel = e => {
        ReactDOM.unmountComponentAtNode(container)
    }
    ReactDOM.render(
        <Modal 
            title={title}
            cancel={cancel}
        />,
        container
    )
}

export default dialog