/*
 * getters就是从state中派生出状态，比如将state中的某个状态进行过滤然后获取新的状态。
 * getters.js用来获取state中的数据，可以认为是store中的计算属性，每个方法都会接收一个state对象作为参数
 **/
import {localStorage} from '@/config/utils'
export default {
  isLogin: (state) => {
    return state.isLogin || Boolean(localStorage('uID'))
  }
}
