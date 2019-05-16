const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const { connect , initSchemas } = require('./database/init')

;(async () => {
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({userName: 'wyc13', password: '123456'})

  oneUser.save().then(() => {
    console.log('插入成功')      
  })
  let users = await  User.findOne({}).exec()

  console.log('------------------')
  console.log(users)
  console.log('------------------')  
})()



app.use( async (ctx) => {
  ctx.body = '<h1>Hello Koa2</h1>'
})

app.listen(3000, () => {
  console.log('[serve] starting at port 3000')
})
