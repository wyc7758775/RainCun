const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const arTitleSchema = new Schema({
  bookName: {  type: String, required:true,  },
  userId: {  type: String, required:true,  },
  bookId: ObjectId
})

const contentSchema = new Schema({
  contentId: ObjectId,
  bookId: {  type: String, required:true,  },
  content: String,
  createAt: { type: Date, default: new Date() },
  title: {  type: String, required: true },
  isRelease: {  type: Boolean,  default: false },  
})

// 发布模型
mongoose.model('arTitle', arTitleSchema)
mongoose.model('content', contentSchema)