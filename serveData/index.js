const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
// 引入connect
const { connect, initSchemas } = require('./database/init.js')

// 接受前端发过来的请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());
// 路由控制
const Router = require('koa-router')
let user = require('./appApi/User.js')


let router = new Router()
router.use('/user', user.routes())
app.use(router.routes())
app.use(router.allowedMethods())



// 立即执行函数
;(async () => {
  console.log('**********我要开始学习NODEJS啦********')
  await connect()
  initSchemas()
})()

app.use(async(ctx)=>{
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3100,()=>{
  console.log('[Server] starting at port 3000')
})