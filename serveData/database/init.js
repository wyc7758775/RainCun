const mongoose = require('mongoose')
const db = "mongodb://localhost/simle-db"
const glob = require('glob')
const { resolve } = require('path')


mongoose.Promise = global.Promise

exports.connect = () => {
  
  // 连接数据库
  //mongoose.connect(db)
  mongoose.connect("mongodb://localhost:27017/RainLog", {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err)
　　}else{
　　　　console.log('Connection success!')
　　}
  })
  let maxConnectTimes = 0

  // 增加数据库连接的时间监听
  return new Promise((resolve, reject) => {
    mongoose.connection.on('disconnected', () => {
      // 进行重连
      if(maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请认为处理')
      }
    })
  
    // 数据库出现错误的时候
    mongoose.connection.on('error', err => {
      if(maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请认为处理')
      }
    })
  
    // 连接打开的时候
    mongoose.connection.once('open', () => {
      console.log('Cuncun is MongoDB Connect successfully!')
      resolve()
    })

  })
  
}
exports.initSchemas = () =>{
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}