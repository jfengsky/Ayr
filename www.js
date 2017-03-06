const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

// app.use(ctx => {
//   ctx.body = 'Hello World';
// });
router.get('/', async (ctx, next) => {
    ctx.body = 'Hello World!'
})

app.use(router.routes())
//   .use(router.allowedMethods())

app.on('error', err =>
    console.log(err)
)

app.listen(4000)