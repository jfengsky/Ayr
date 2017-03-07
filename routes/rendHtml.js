import register from 'babel-register'
import nodeJsx from 'node-jsx'
import React from 'react'
import renderToString from 'react-dom/server'

import Todolist from '../public/lib/src/Todolist'

// node下支持jsx
register({presets: ['es2015', 'react', 'stage-0']})
nodeJsx.install({
    extension:'.jsx'
})

let indexHtml = ''

const data = ['list1', 'list2', 'list3']

indexHtml = renderToString.renderToString(<Todolist data={data} />)

export default indexHtml