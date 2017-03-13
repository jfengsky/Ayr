import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import Root from './component/Root'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
)