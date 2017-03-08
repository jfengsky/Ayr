import Router from 'koa-router'
import indexHtml from './rendHtml'
import DB from '../db/db'


const index = new Router()
index.get('/', async ctx => {

    await ctx.render('index',{title: indexHtml})
    // ctx.body = 'koa2 test'
    // await ctx.send(ctx, 'index.html', {root: '../views/index'})
}).get('/test', async ctx => {
    // ctx.body = ctx.render('index',{title: 'koa2 easy'})
    ctx.body = 'test'
}).post('/pagetype', async ctx => {
    // await next()
    let bodyParam = ctx.request.body
    if(bodyParam.type === 'save'){
        await DB.save({
            value:bodyParam.value,
            dbName:'AyrData', // 数据库
            colName: 'pageType'  // 集合
        }).then(data => {
            ctx.body = data
        })
    } else if(bodyParam.type === 'search') {
        await DB.search({
            dbName:'AyrData', // 数据库
            colName: 'pageType'  // 集合
        }).then(data => {
            ctx.body = data
        })
    }

}).post('/createdb', async ctx => {
    DB.init()
    ctx.status = 200
})
export default index