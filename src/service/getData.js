import fetch from '@/config/axios'

export const sendLogin = (username, passwd) => fetch('/mock/sendLogin', { // 登录
  data: { username, passwd }
})

export const chainList = () => fetch('/mock/chainList') // 获取列表数据
