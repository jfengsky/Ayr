import Router from 'koa-router'
import indexHtml from './rendHtml'
// import DB from '../db/db'
import DB from '../db/dbClient'
import file from '../bin/file'

const DBNAME = 'AyrData'

const index = new Router()
index.get('/', async ctx => {

    await ctx.render('index',{title: indexHtml})
    // ctx.body = 'koa2 test'
    // await ctx.send(ctx, 'index.html', {root: '../views/index'})
}).get('/test', async ctx => {
    // ctx.body = ctx.render('index',{title: 'koa2 easy'})
    ctx.body = 'test'
}).post('/pagetype', async ctx => {
    const colName = 'pageType'
    let bodyParam = ctx.request.body
    if(bodyParam.type === 'save'){
        await DB.save({
            value:bodyParam.name,
            dbName: DBNAME, // 数据库
            colName
        }).then(data => {
            ctx.body = data.result
            ctx.body = {
                ...data.result,
                data: data.ops[0]
            }
        })
    } else if(bodyParam.type === 'search') {
        await DB.search({
            dbName: DBNAME, // 数据库
            colName
        }).then(data => {

            // 过滤_id
            let tempData = data.map( ({name, id}) => {
                return {
                    name,
                    id
                }
            })

            ctx.body = {
                ok: 1,
                data: tempData
            }
        })
    } else if(bodyParam.type === 'delete') {
        await DB.delete({
            id: bodyParam.id - 0,
            dbName: DBNAME, // 数据库
            colName
        }).then( data => {
            ctx.body = data
        })
    }

}).post('/pageCode', async ctx => {
    const colName = 'pageCode'
    let {
        pageName,
        pageType,
        pageDesc,
        pageCode,
        type
    } = ctx.request.body

    if(type === 'save') {
        await file.write({
            name: pageName,
            code: pageCode
        }).then( async data => {

            await DB.pageSave({
                dbName:DBNAME,
                colName,
                name: pageName,
                type: pageType,
                desc: pageDesc
            }).then( result => {
                ctx.body = result
            })
        }).catch(err =>{
            throw err
        })
    }

    
    
}).post('/createdb', async ctx => {
    DB.init()
    ctx.status = 200
})
export default index