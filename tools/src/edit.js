import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import Edit from './component/Edit'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <Edit />
    </Provider>,
    document.getElementById('root')
)