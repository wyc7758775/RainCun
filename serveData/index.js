const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
// 加載靜態文件
const static = require('koa-static')
const path = require('path')

// 跨域
const cors = require('koa2-cors')
app.use(cors())
// 引入connect
const { connect, initSchemas } = require('./database/init.js')

// 接受前端发过来的请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());
// 路由控制
const Router = require('koa-router')
let user = require('./appApi/User.js')
let about = require('./appApi/about.js')
let artTitle = require('./appApi/ArTitle.js')

let router = new Router()
router.use('/user', user.routes())
router.use('/about', about.routes())
router.use('/arTitle', artTitle.routes())
app.use(router.routes())
app.use(router.allowedMethods())



// 立即执行函数
;(async () => {
  console.log('**********我要开始学习NODEJS啦********')
  await connect()
  initSchemas()
})()

app.use(static(
  path.join(__dirname, './www')
))
app.use(async(ctx)=>{
  ctx.body = 'hello wuyucun' 
})

app.listen(3100,()=>{
  console.log('[Server] starting at port 3100')
})