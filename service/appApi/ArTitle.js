const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.post('/addBook', async(ctx) => {
  const response = ctx.request.body
  const arTitle = mongoose.model('arTitle')
  let newAddBookData = new arTitle(response)
  let code, msg  
  await newAddBookData.save().then(() => {
    code = 200
    msg = '添加成功'
  }).catch(error => {
    console.log(error)
    code = 500
    msg = error
  })
  ctx.body = {
    code, msg
  }
})

router.post('/getBookList', async(ctx) => {
  const response = ctx.request.body
  console.log(response)
  const arTitle = mongoose.model('arTitle')
  let code, msg
  let data = await  arTitle.find({userId: response.userId })
  if(data) {
    code = 200,
    msg = '成功'
  }
  ctx.body = {
    code, msg, data
  }
})

module.exports = router