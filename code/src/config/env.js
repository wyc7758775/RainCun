

let baseUrl = ''
let routerMode = 'hash'
let baseImgPath

if (process.env.NODE_ENV == 'development') { // 判断当前是开发环境还是测试环境
  baseUrl = '/api',
  baseImgPath = '/img/'
} else {
	baseUrl = 'http://localhost:3000/'
  baseImgPath = '//elm.cangdu.org/img/'
}

export {
	baseUrl
}