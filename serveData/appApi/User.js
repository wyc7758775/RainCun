const Router = require('koa-router')
let router = new Router()

router.get('/', async(ctx) => {
  console.log(ctx)
  ctx.body = '这是我的用户操作首页啊'
})
router.get('/register', async(ctx) => {
  ctx.body = '我要开始i 注册了o'
})



module.exports = router