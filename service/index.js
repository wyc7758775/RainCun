const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const mongoose = require('mongoose')
const cors = require('koa2-cors')
const  bodyParser = require('koa-bodyparser')
const { connect , initSchemas } = require('./database/init')
let user = require('./appApi/User.js')
app.use(cors())
app.use(bodyParser())
;(async () => {
  await connect()
  initSchemas()
  // const User = mongoose.model('User')
  // let oneUser = new User({userName: 'wyc13', password: '123456'})

  // oneUser.save().then(() => {
  //   console.log('插入成功')      
  // })
  // let users = await  User.findOne({}).exec()

  // console.log('------------------')
  // console.log(users)
  // console.log('------------------')  
})()

let router = new Router()
router.use('/user', user.routes())
app.use(router.routes())
app.use(router.allowedMethods())

// app.use( async (ctx) => {
//   ctx.body = '<h1>Hello Koa2啊</h1>'
// })

app.listen(3000, () => {
  console.log('[serve] starting at port 3000')
})