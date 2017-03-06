import 'babel-polyfill'
import path from 'path'
import Koa from 'koa'
import router from 'koa-router'
import views from 'koa-views'
import staticServe from 'koa-static'
import index from './routes/index'
// import bookingnext from './routes/bookingnext'

const app = new Koa()
const Router = router()



// 端口

import{PORT} from './bin/config'

const PUBLIC = __dirname + '/public/'

// 代码静态目录
export const CODE = __dirname + '/code/'

// 设置静态目录
app.use(staticServe(PUBLIC))
app.use(staticServe(CODE))


app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
});


app.on('error', (err, ctx) => {
    console.log(err)
    console.log(ctx)
})

app.listen(PORT)



console.log(`App listening on port ${PORT}`)