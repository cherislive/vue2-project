/*
 * 官方文档 http://vuex.vuejs.org/zh-cn/intro.html
 * 状态管理工具 管理项目中各个状态
 * 状态保存在 store
 **/
// vuex的核心文件，从这个文件中export出一个vuex实例
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  strict: process.env.NODE_ENV !== 'production', // 当前环境
  isLogin: false,
  userInfo: {}, // 用户信息
  stateFullScreen: false, // 全屏状态
  dataPushState: false, // 数据推送状态
  dataPushTimestamp: '' // 数据推送时间戳
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
