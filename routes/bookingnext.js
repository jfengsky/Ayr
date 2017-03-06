import Router from 'koa-router'

const bookingnext = new Router()

bookingnext.get('/bookingnext/next', async ctx => {
    ctx.body = 'booking next'
})
export default bookingnext