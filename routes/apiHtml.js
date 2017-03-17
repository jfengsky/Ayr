import register from 'babel-register'
import nodeJsx from 'node-jsx'
import React from 'react'
import reactServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../tools/src/reducers/reducer'
import Edit from '../tools/src/component/Api'

// node下支持jsx
register({presets: ['es2015', 'react', 'stage-0']})
nodeJsx.install({
    extension:'.jsx'
})

const store = createStore(reducer)

let indexHtml = reactServer.renderToString(
    <Provider store={store}>
        <Edit />
    </Provider>
)

export default indexHtml