import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import Api from './component/Api'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <Api />
    </Provider>,
    document.getElementById('root')
)