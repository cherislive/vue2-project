import Mock from 'mockjs'
import { sendLogin, chainList } from '@/mock/default'

let data = [].concat(sendLogin, chainList)
data.forEach(function (res) {
  Mock.mock(res.path, res.rtype, res.data)
})

export default Mock
