const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const mongoose = require('mongoose')
const cors = require('koa2-cors')
const  bodyParser = require('koa-bodyparser')
const { connect , initSchemas } = require('./database/init')
// API start
let user = require('./appApi/User.js')
let leaveWord = require('./appApi/LeaveWord.js')
let arTitle = require('./appApi/ArTitle.js')
// API end
app.use(cors())
app.use(bodyParser())
;(async () => {
  await connect()
  initSchemas()
})()

let router = new Router()
router.use('/user', user.routes())
router.use('/leaveWord', leaveWord.routes())
router.use('/arTitle', arTitle.routes())
app.use(router.routes())
app.use(router.allowedMethods())

// app.use( async (ctx) => {
//   ctx.body = '<h1>Hello Koa2啊</h1>'
// })

app.listen(3000, () => {
  console.log('[serve] starting at port 3000')
})