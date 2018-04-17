import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'
import {routerMode} from '@/config/env'
import App from '@/App'

Vue.use(Router)
const routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    {
      path: '',
      redirect: '/index'
    }, {
      path: '/index',
      component: resolve => require(['@/page/index'], resolve),
      meta: { auth: true }
    }, {
      path: '/login',
      component: resolve => require(['@/page/login/index'], resolve)
    }
  ]
}, {
  path: '*',
  redirect: '/error'
}, {
  path: '/error',
  component: resolve => require(['@/page/404'], resolve)
}]

const router = new Router({
  routes,
  mode: routerMode, // 路由使用的 模式
  strict: process.env.NODE_ENV !== 'production',
  transitionOnLoad: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  }
})

// 用户登录过滤器
router.beforeEach((to, from, next) => {
  const isLogin = Boolean(store.getters.isLogin)
  if (to.path === '/login' && isLogin) {
    const referrerPath = to.query.referrer || '/index'
    router.push({ path: referrerPath })
    return
  }
  if (to.matched.some(m => m.meta.auth)) {
    if (isLogin) { // 已经登陆
      next()
      return
    }
    router.push({ path: '/login', query: { referrer: to.fullPath } })
    return
  }
  next()
})

export default router
