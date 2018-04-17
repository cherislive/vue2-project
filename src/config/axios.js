import axios from 'axios'
import Qs from 'qs'
import router from '@/router'
import {baseUrl} from './env'
import {removeCookie} from './utils'
axios.defaults.timeout = 12000
// 暂时屏蔽请求拦截
axios.interceptors.response.use((res) => {
  let status = res.status
  let statusText = res.statusText || 'error'
  if ((status >= 200 && status < 300) || status === 304) {
    if (res.config && res.config.inSkipIntercept) { // 跳过拦截器
      return res
    }
    if (res.data && typeof res.data === 'object' && res.data.code && res.data.code === 90003) {
      removeCookie('uID')
      router.push({path: '/login'})
    }
    return res
  } else {
    router.push({path: '/error', query: {code: res.status}})
    var error = new Error(statusText)
    error.response = res
    throw error
  }
}, (err) => {
  router.push({path: '/error', query: {code: 'X10021'}})
  return Promise.reject(err)
})

export default async (url = '', options = {}) => {
  let data = options.data || {}
  let method = options.type ? options.type.toUpperCase() : 'POST'
  options.headers = options.headers || {}
  if (url.indexOf('mock') === -1) {
    url = baseUrl + url
  }
  options.headers['Accept'] = 'application/json'
  if (options.contentType === 'json') {
    options.headers['Content-Type'] = 'application/json;charset=UTF-8'
  } else {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    data = Qs.stringify(data)
  }
  try {
    let response = await axios({
      method,
      url,
      data: method === 'POST' ? data : null,
      headers: options.headers,
      inSkipIntercept: options.inSkipIntercept,
      withCredentials: false // 当前请求为跨域类型时是否在请求中协带cookie
    })
    return response.data
  } catch (error) {
    throw error
  }
}
