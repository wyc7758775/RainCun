const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

// 创建留言的Schema
const leaveMsgSchema = new Schema({
  leaveMsgId: ObjectId,
  relateByArtitleId: { type: String },
  nickName: { type: String },
  content: { type: String },
  createAt: { type: Date, default: Date.now() }
})

// 发布模型
mongoose.model('leaveMsg', leaveMsgSchema)