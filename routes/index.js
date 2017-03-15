import Router from 'koa-router'
import indexHtml from './rendHtml'
import editHtml from './editHtml'

// 页面类型
import pageTypeHandle from './pageTypeHandle'

// 页面代码
import pageInfo from './pageInfo';

// import DB from '../db/db'
import DB from '../db/dbClient'
import file from '../bin/file'

const index = new Router()
index.get('/', async ctx => {

    await ctx.render('index',{title: indexHtml})

}).get('/edit', async ctx => {
    
    await ctx.render('edit',{title: editHtml})
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
    // const colName = 'pageCode'
    // let {
    //     pageName,
    //     pageType,
    //     pageDesc,
    //     pageCode,
    //     type,
    //     id
    // } = ctx.request.body

    // if(type === 'save') {
    //     await file.write({
    //         name: pageName,
    //         code: pageCode
    //     }).then( async data => {

    //         await DB.pageSave({
    //             // dbName:DBNAME,
    //             colName,
    //             name: pageName,
    //             type: pageType,
    //             desc: pageDesc
    //         }).then( result => {
    //             ctx.body = result
    //         })
    //     }).catch(err =>{
    //         throw err
    //     })
    // } else if(type === 'search') {
    //     await DB.pageSearch({
    //         // dbName:DBNAME,
    //         colName,
    //         id
    //     }).then( result => {
    //         ctx.body = {
    //             data: result,
    //             ok: 1
    //         }
    //     })
    // } else if(type === 'modify') {
    //     await file.read({
    //         name: pageName
    //     }).then( result => {
    //         ctx.body = {
    //             ok: 1,
    //             data: result
    //         }
    //     })
    // }

    
    
}).post('/createdb', async ctx => {
    DB.init()
    ctx.status = 200
})
export default index