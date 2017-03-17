import Router from 'koa-router'
import indexHtml from './rendHtml'
import editHtml from './editHtml'
import apiHtml from './apiHtml';

// 页面类型
import pageTypeHandle from './pageTypeHandle'

// 页面代码
import pageInfo from './pageInfo';

// 接口类型
import apiTypeHandle from './apiTypeHandle'

// import DB from '../db/db'
import DB from '../db/dbClient'
import file from '../bin/file'

const index = new Router()
index.get('/', async ctx => {

    await ctx.render('index',{title: indexHtml})

}).get('/edit', async ctx => {
    
    await ctx.render('edit',{title: editHtml})
}).get('/api', async ctx => {
    
    await ctx.render('api',{title: apiHtml})
}).post('/pagetype', async ctx => {
    let result = await pageTypeHandle.init({
        data: ctx.request.body
    })
    ctx.body = result

}).post('/pageinfo', async ctx => {
    let result = await pageInfo.init({
        data: ctx.request.body
    })
    ctx.body = result
    
}).post('/apiType', async ctx => {
    let result = await apiTypeHandle.init({
        data: ctx.request.body
    })
    ctx.body = result
    
}).post('/createdb', async ctx => {
    DB.init()
    ctx.status = 200
})
export default index