const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.post('/addLeaveMsg', async(ctx) => {
  const leaveMsgData = ctx.request.body
  const LeaveMsg = mongoose.model('leaveMsg')
  let code, addLeaveMsg
  let testData = {
    relateByArtitleId: '',
    nickName: '村小弟',
    content: '你是我大哥，以后你说什么就是什么'
  }
  let newLeaveMsg = new LeaveMsg(leaveMsgData)
  await newLeaveMsg.save().then(() => {
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

module.exports = router