const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

router.post('/addAboutMe', async(ctx) => {

  console.log('********我要获取关于我********')
  let addAboutMeData = ctx.request.body
  const aboutMe = mongoose.model('aboutMe')
  let newAddAboutMe = new aboutMe(addAboutMeData)
  console.log(newAddAboutMe)
  let data = await  aboutMe.find({userId: newAddAboutMe.userId })
  console.log(data)
  if(data) {
    console.log('________我需要更新我的这个内容哦________')
    let data = await aboutMe.remove({userId: newAddAboutMe.userId })
    console.log(data)
    if(data.ok === 1) {
      console.log('删除成功，即将添加当中。。。。。')
      await newAddAboutMe.save().then(() => {
        code = 200
        msg = '更新成功'
      }).catch(error => {
        code = 500
        msg = error
      })
    }
  } else {
    await newAddAboutMe.save().then(() => {
      code = 200
      msg = '添加成功'
    }).catch(error => {
      code = 500
      msg = error
    })
  }
  ctx.body = {
    code: code,
    msg : msg
  } 
})
router.post('/getAboutMe', async(ctx) => {
  let response = ctx.request.body
  const aboutMe = mongoose.model('aboutMe')
  let code, msg
  let data = await  aboutMe.find({userId: response.userId })
  if(data) {
    code = 200,
    msg = '成功',
    data = data
  }
  ctx.body = {
    code, msg, data
  }
})

module.exports = router