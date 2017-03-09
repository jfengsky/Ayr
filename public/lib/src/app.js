import React from 'react'
import ReactDOM from 'react-dom'
import initState from './store/initState'
import Root from './component/Root'
import { FETCH_PAGETYPE } from './store/request'
import { SET_PAGET_TYPE } from './store/setInitState'

const render = data => {
    ReactDOM.render(
        <Root data={data} />,
        document.getElementById('root')
    )
}

// 请求页面类型
FETCH_PAGETYPE({
    type: 'search'
}).then( data => {
    if(data.ok === 1) {
        SET_PAGET_TYPE(data.data)
        render(initState)
    }
})