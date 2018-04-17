// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/'
import router from '@/router'
import * as filters from '@/config/filter'
import '@/mock/index' // 模拟数据 开发阶段使用

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
