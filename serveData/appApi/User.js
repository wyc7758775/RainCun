const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

router.post('/login', async(ctx) => {
  let parms = {}
  let loginUser = ctx.request.body
  let userName = loginUser.userName
  let password = loginUser.password

  const User = mongoose.model('User')
  await User.findOne({userName: userName}).exec().then(async(result) => {
    console.log(result)
    if(result) {
      // 账号存在就对比密码
      let newUser = new User() // 因为是实例方法，所以要new出方法,才能调用
      await newUser.comparePassword(password, result.password)
      .then( (isMath) => {
        if(isMath) {
          parms = {
            code : 200,
            msg : '登录成功',
            data: result
          }
        }else {
          parms = {
            code : 500,
            msg : '密码错误哦，大哥'
          }
        }
      })
    } else {
      parms = {
        code: 500,
        msg: '账号不存在',
      }
    }
    console.log('******摇滚*****')
  })
  ctx.body = parms
})
router.post('/register', async(ctx) => {
  const User = mongoose.model('User')
  let newUser = new User(ctx.request.body)
  let parms = {}
  await newUser.save().then(() => {
    parms = {
      code: 200,
      message: '注册成功'
    }
  }).catch(error => {
    parms = {
      code: 500,
      message: error
    }
  })
  ctx.body = parms
})

router.post('/getUers', async(ctx) => {
  const User = mongoose.model('User')
  let resData = await User.find()
  console.log('**********获取用户列表************')
  console.log(resData)
  let parms = {}
  if(resData) {
    parms = {
      code: 200,
      msg: '成功',
      data: resData
    }
  }
  ctx.body = parms
})



module.exports = router