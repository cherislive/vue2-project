/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式  http://router.vuejs.org/zh-cn/api/options.html#mode
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl
let routerMode
let mobileRoute = ['/index', '/register']

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
  routerMode = 'history' // hash
} else {
  baseUrl = '/api'
  routerMode = 'history' // 'hash'
}

export {
  baseUrl,
  routerMode,
  mobileRoute
}
