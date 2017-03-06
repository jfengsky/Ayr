import 'babel-polyfill'
import path from 'path'
import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import staticServe from 'koa-static'
import convert from 'koa-convert'

import index from './routes/index'
import bookingnext from './routes/bookingnext'
// 端口

import{ PORT } from './bin/config'

const app = new Koa()

const PUBLIC = __dirname + '/public/'

// 代码静态目录
const CODE = __dirname + '/code/'

// 设置静态目录
app.use(staticServe(PUBLIC))
app.use(staticServe(CODE))

// 模板目录
const VIEWS = __dirname + '/views'
app.use(views(VIEWS, {
    extension: 'ejs'
}))

// 记录所用方式与时间
app.use(logger())

// 传输JSON
app.use(json())

// body解析
app.use(bodyParser())

app.use(index.routes())
app.use(bookingnext.routes())

app.on('error', (err, ctx) => {
    console.log(err)
    console.log(ctx)
})

app.listen(PORT)

console.log(`App listening on port ${PORT}`)