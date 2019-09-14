// vue.config.js
const path = require('path')
// const compressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'blog',//构建输出目录
  assetsDir: 'assets',//静态资源目录(js,css,img,fonts)
  productionSourceMap: false,
  publicPath: './',
  lintOnSave: false,//是否开启eslint保存检测,有效值: true || false || 'error'
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     return {
  //       plugins: [new compressionPlugin({
  //         test: /\.js$|\.html$|\.css/, // 匹配文件
  //         threshold: 10240, // 对超过10k的数据进行压缩
  //         deleteOriginalAssets: false // 是否删除源文件
  //       })]
  //     }
  //   }
  // },
  // webpack-dev-server 相关配置
  devServer: {
    // 调试端口
    // port: 8989
    port: 8181,// 端口号
    open: true, //配置自动启动浏览器
    proxy: {
      //配置跨域
      '/api': {
          target: "http://localhost:3100/",
          changOrigin:true,
          pathRewrite:{
              '^/api':'/'
          }
      }
    }
  }
}
