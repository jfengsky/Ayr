import 'babel-polyfill'
import router from 'koa-router'

const Router = router()

Router.get('/', async (ctx, next)=>{
    ctx.state = {
        title: 'koa2 title'
    }
    await ctx.render('index',{})
})

export default Router