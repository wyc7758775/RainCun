const mongoose = require('mongoose')
const glob = require('glob') // 用来匹配对应规则的文件
const { resolve } = require('path') // 将各种路径解析为绝对路径
const db = "mongodb://localhost/simle-db"

mongoose.Promise =  global.Promise

exports.connect = () => {
  console.log('我要开始连接数据库了')
  console.log(Date.now())
  let maxConnectTimes = 0
  // 连接数据库
  //mongoose.connect(db)

  mongoose.connect("mongodb://localhost:27017/study", {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err)
　　}else{
　　　　console.log('Connection success!')
　　}
})


return  new Promise((resolve,reject) => {
  //把所有连接放到这里
      
      //增加数据库监听事件
      mongoose.connection.on('disconnected', () => {
          console.log('***********数据库断开***********')
          if(maxConnectTimes<3){
              maxConnectTimes++
              mongoose.connect(db)    
          }else{
              reject()
              throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
          }
          
      })

      mongoose.connection.on('error', err => {
          console.log('***********数据库错误***********')
          if(maxConnectTimes<3){
              maxConnectTimes++
              mongoose.connect(db)   
          }else{
              reject(err)
              throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
          }

      })
      //链接打开的时
      mongoose.connection.once('open', () => {
          console.log('MongoDB connected successfully') 
          resolve()   
      })

  })

}
exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}