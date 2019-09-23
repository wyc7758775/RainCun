

let baseUrl = ''
let routerMode = 'hash'
let baseImgPath

if (process.env.NODE_ENV == 'development') { // 判断当前是开发环境还是测试环境
  baseUrl = 'http://39.108.71.130:3100/',
  baseImgPath = '/img/'
} else {
	baseUrl = 'http://39.108.71.130:3100/'
  baseImgPath = '//elm.cangdu.org/img/'
}

export {
	baseUrl
}