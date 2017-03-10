/**
 * 初始化弹出层组件
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../component/Modal'
import { FETCH_PAGE_CODE } from '../store/request'
import { CLEAR_PAGE_INFO } from '../store/setInitState'

const dialog = params =>  {
    let {title, code} = params
    let container = document.createElement('div')
    document.body.appendChild(container)
    const cancel = e => {
        ReactDOM.unmountComponentAtNode(container)
        CLEAR_PAGE_INFO()
    }
    const saveCode = data => {
        FETCH_PAGE_CODE({
            ...data,
            type: 'save'
        }).then(_data => {
            cancel()
        })
    }
    ReactDOM.render(
        <Modal 
            title={title}
            cancel={cancel}
            save={saveCode}
            code={code}
        />,
        container
    )
}

export default dialog