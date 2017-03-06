import Router from 'koa-router'

const index = new Router()

index.get('/', async ctx => {



    await ctx.render('index',{title: 'koa2 easy'})
    // ctx.body = 'koa2 test'
    // await ctx.send(ctx, 'index.html', {root: '../views/index'})
}).get('/test', async ctx => {
    // ctx.body = ctx.render('index',{title: 'koa2 easy'})
    ctx.body = 'test'
})
// .get('/send', async ctx => {
//     await ctx.send(ctx, 'index.html', {root: 'static/index'})
// })
export default index