/*
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * 存放如何更改状态
 * mutation 必须是同步函数
 *
 **/
import {
  GET_USERINFO,
  RECORD_USERINFO,
  OUT_LOGIN
} from './mutation-types.js'
import { localStorage, removeLocalStorage } from '@/config/utils'

export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    this.commit('GET_USERINFO', info)
  },
  // 获取用户信息存入vuex
  [GET_USERINFO] (state, info) {
    if (!info || !info.ssid) { // 登录失败
      console.error('!!! Login State: ERROR !!!')
      this.commit('OUT_LOGIN')
      return
    }
    localStorage('uID', info.id)
    localStorage('currentUser', info)
    state.isLogin = true
    state.userInfo = info
  },
  // 退出
  [OUT_LOGIN] (state) {
    removeLocalStorage('uID')
    removeLocalStorage('currentUser')
    state.isLogin = false
    state.userInfo = {}
  }
}
