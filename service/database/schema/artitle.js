const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const arTitleSchema = new Schema({
  bookName: String,
  userId: String,
  bookId: ObjectId
})

// 发布模型
mongoose.model('arTitle', arTitleSchema)