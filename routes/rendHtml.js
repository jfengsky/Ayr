import register from 'babel-register'
import nodeJsx from 'node-jsx'
import React from 'react'
import reactServer from 'react-dom/server'
import { tabData } from '../bin/config'
// import Todolist from '../public/lib/src/Todolist'

import Tab from '../public/lib/src/component/Tab'

// node下支持jsx
register({presets: ['es2015', 'react', 'stage-0']})
nodeJsx.install({
    extension:'.jsx'
})

let indexHtml = ''

indexHtml = reactServer.renderToString(<Tab data={tabData} />)

export default indexHtml