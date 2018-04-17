module.exports = keyMirror({
  FETCH_LIST_REQUEST: null,
  FETCH_LIST_SUCCESS: null,
  FETCH_LISR_FAILURE: null})
/*
 * keyMirror
 * Input: {key1: null, key2: null}
 * Output: {key1: key1, key2: key2}
 **/
function keyMirror (obj) {
  if (obj instanceof Object) {
    let _obj = Object.assign({}, obj)
    let _keyArray = Object.keys(obj)
    _keyArray.forEach(key => _obj[key] = key)
    // return _obj
  }
}
