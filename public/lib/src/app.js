import React from 'react'
import ReactDOM from 'react-dom'
import initState from './store/initState'
import Root from './component/Root'

const render = data => {
    ReactDOM.render(
        <Root data={data} />,
        document.getElementById('root')
    )
}

render(initState)