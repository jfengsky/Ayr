import register from 'babel-register'
import nodeJsx from 'node-jsx'
import React from 'react'
import reactServer from 'react-dom/server'
import initState from '../public/lib/src/store/initState'
// import Todolist from '../public/lib/src/Todolist'

import Root from '../public/lib/src/component/Root'

// node下支持jsx
register({presets: ['es2015', 'react', 'stage-0']})
nodeJsx.install({
    extension:'.jsx'
})

let indexHtml = reactServer.renderToString(<Root data={initState} />)

export default indexHtml