const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.post('/login', async(ctx) => {
  const loginUser = ctx.request.body // 获取到前端给得值
  // 取得model
  const User = mongoose.model('User')
  let code, msg, data
  // 把从前端接受到得POST数据封装成一个新个User对象  
  await User.findOne({ userName: loginUser.username }).exec().then(async(result) => {
    if (result) {
      let newUser = new User()
      await newUser.comparePassword(loginUser.password, result.password)
      .then( (isMatch) => {
        console.log('******验证码密码*******')
        console.log(isMatch)
        if(isMatch){
          data = {
            userId: result.id
          }
          code = 200
        } else {
          code = 201
          msg = '输入的密码错啦'
        }
      })
      .catch(error => {
        console.log(error)
        code = 500
        msg = error
      })
    } else {
      code = 400
      msg = '用户不存在'
    }
  })
  ctx.body = {
    code,
    msg,
    data
  }
})

router.post('/register', async(ctx) => {
  const response = ctx.request.body
  const User = mongoose.model('User')
  let newUser = new User(response)
  let code,msg
  await newUser.save().then(() => {
    code = 200
    msg = '注册成功'
  }).catch(error => {
    console.log(error)
    code = 500
    msg = error
  })
  ctx.body = {
    code, msg
  }
})

module.exports = router
