export const sendLogin = [
  {
    path: '/mock/sendLogin',
    rtype: 'post',
    data: {
      data: {
        nickname: '@name',
        ssid: '7ce5a29c-e9c7-4e93-a4eb-c97742289fb3',
        'id|1-100': 1
      },
      code: 200,
      success: true
    }
  }
]

export const chainList = [
  {
    path: '/mock/chainList',
    rtype: 'post',
    data: {
      'data|20': [{
        filePath: '@guid',
        node1: '@cword(3, 5)',
        node2: '@cword(3, 5)',
        node3: '@cword(3, 5)',
        'relation|+1': ['下游', '上游', '业内公司', '相关企业'],
        desc: '@cparagraph',
        'id|1-100': 1
      }],
      pagination: {
        'total': 15,
        'per_page': 15,
        'current_page': 1,
        'last_page': 1,
        'from': 1,
        'to': 15
      },
      code: 200,
      success: true
    }
  }
]
