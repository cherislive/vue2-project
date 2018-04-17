/*
* 对Date的扩展，将 Date 转化为指定格式的String
* 调用 new Date().format("yyyy-MM-dd");  年-月-日
*      new Date().format("yyyy-MM-dd hh:mm:ss");   年-月-日 时:分:秒
*      new Date().format("yyyy-MM-dd hh:mm:ss:S");     年-月-日 时:分:秒:毫秒
*/
export const dateFormat = function (str, fmt) {
  if (!str) return ''
  var date = new Date(str)
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
/**
 * 格式化时间
 * @name    formatDate
 * @param   {String}  13位unix时间戳
 * @return  {String}   格式化后的时间
*/
export const formatDate = (str) => {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  // } else if ((time / 86400000) < 31) {
  //   return parseInt(time / 86400000) + '天前'
  // } else if ((time / 2592000000) < 12) {
  //   return parseInt(time / 2592000000) + '月前'
  // } else {
  //   return parseInt(time / 31536000000) + '年前'
  } else if (date.getFullYear() === new Date().getFullYear()) {
    return dateFormat(date, 'MM月dd日 hh:mm')
  } else {
    return dateFormat(date, 'yyyy年MM月dd日 hh:mm')
  }
}
/**
   * 千分位格式化
   * 最大处理12位（带小数点） 保留两位小数，小数点后第三位舍弃
   * @param {num}   Number 要格式化的数值
   * @param {floor} Boolean 是否取整
   * @return  {String}  处理过的千分位
*/
export const formatCurrency = function (num, floor) {
  if (num === undefined) {
    num = '0'
  }
  var isPositive = ''
  if (num && num * 1 < 0) {
    // return num
    num = num * -1
    isPositive = '-'
  }
  num = num.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '').replace(/\s/g, '') // trim
  num = num.replace(/^(\/-)*(\d+)\.(\d\d).*$/, '$1$2.$3') // 保留两位小数 三位之后舍弃
  if (isNaN(num) || num === '' || num.length > 12) {
    return num
  }
  var cents = num.replace(/^\w*/ig, '')
  if (cents.length === 0 || cents.length === 1) {
    cents = '.00'
  }
  if (cents.length === 2) {
    cents = cents + '0'
  }
  num = parseInt(num).toString()
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  if (cents === '.00' && floor === 'trunc') {
    cents = ''
  }
  if ((floor && floor !== 'trunc') || (cents === '.00')) {
    // return num
    return isPositive + num
  } else {
    // return num + cents
    return isPositive + num + cents
  }
}
