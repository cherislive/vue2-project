// action 触发 store 的更新状态 Action 提交的是 mutation，而不是直接变更状态。  Action 可以包含任意异步操作
import { localStorage } from '@/config/utils'
import {
  GET_USERINFO
} from '../mutations/mutation-types.js'

export default {
  async getUserInfo ({commit}, state) {
    let res = await localStorage('currentUser')
    commit(GET_USERINFO, JSON.parse(res))
  }
}
