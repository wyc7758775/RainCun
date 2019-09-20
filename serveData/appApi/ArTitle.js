const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.post('/addBook', async(ctx) => {
  const response = ctx.request.body
  console.log(response)
  const arTitle = mongoose.model('arTitle')
  let newAddBookData = new arTitle(response)
  let code, msg, data = []
  await newAddBookData.save().then((res) => {
    code = 200
    msg = '添加成功'
    data = res
  }).catch(error => {
    console.log(error)
    code = 500
    msg = error
  })
  ctx.body = {
    code, msg, data
  }
})

router.post('/getBookList', async(ctx) => {
  const response = ctx.request.body
  const arTitle = mongoose.model('arTitle')
  let code, msg
  let data = await  arTitle.find({userId: response.userId })
  console.log(data)
  if(data) {
    code = 200,
    msg = '成功'
  }
  ctx.body = {
    code, msg, data
  }
})

router.post('/addContent', async(ctx) => {
  const response = ctx.request.body
  console.log('*********新增文章**********')
  console.log(response)
  const content = mongoose.model('content')
  let newAddContent = new content(response)
  let code, msg, data = []
  await newAddContent.save().then((res) => {
    code = 200
    msg = '添加成功'
    data = res
  }).catch(error => {
    console.log(error)
    code = 500
    msg = error
  })
  ctx.body = {
    code, msg, data
  }
})

router.post('/getContentList', async(ctx) => {
  const response = ctx.request.body
  console.log(typeof response.bookId)
  const content = mongoose.model('content')
  let code, msg, data
  if(!response.bookId) {
    console.log('**********获取所有的文章**********')
    let resData = await content.find()
    data = resData
  } else {
    console.log('********获取单篇的文章***********')
    console.log(response)
    let resData = await  content.find({"bookId": response.bookId })
    data = resData
  }
  if(data) {
    code = 200,
    msg = '成功'
  }
  ctx.body = {
    code, msg, data
  }
})
// 删除文章
router.post('/delectContentById', async(ctx) => {
  const response = ctx.request.body
  console.log(response)
  const content = mongoose.model('content')
  let code, msg
  let data = await content.remove({
    "_id": response.contentId
  })
  console.log(data)
  if(data) {
    code = 200,
    msg = '成功'
  }
  ctx.body = {
    code, msg, data
  }
})
// 更新文章
router.post('/updateContent', async(ctx) => {
  const response = ctx.request.body
  console.log(response)
  const content = mongoose.model('content')
  let code, msg
  let data = await content.update({"_id": response.contentId}, {
    "content": response.content,
    "title": response.title
  })
  if(data) {
    code = 200,
    msg = '成功'
  }
  ctx.body = {
    code, msg, data
  }
})
// 发布文章
router.post('/releaseContent', async(ctx) => {
  const response = ctx.request.body
  console.log(response)
  const content = mongoose.model('content')
  let code, msg
  let data = await content.update({"_id": response.contentId}, {
    "isRelease": true
  })
  if(data) {
    code = 200,
    msg = '成功'
  }
  ctx.body = {
    code, msg, data
  }
})
module.exports = router