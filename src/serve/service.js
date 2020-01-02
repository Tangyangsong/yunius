import ajax from './ajax'

const USER_INFO_KEY = 'userInfo' // 用户信息
export const HTTP_HOST = "http://39.99.243.197:801";
export const AJAX_URL = "/cppc3/web/api";
export const WEBSOCK_URL = "//39.99.243.197:7890";
/**
 * 存用户登录信息
 */
export const setUserStorage = (user) => {
  window.localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
}
/**
 * 获取用户登录信息
 */
export const getUserStorage = () => {
  return window.localStorage.getItem(USER_INFO_KEY) ? JSON.parse(window.localStorage.getItem(USER_INFO_KEY)) : null
}
/**
 * 删除用户登录信息
 */
export const delUserStorage = () => {
  window.localStorage.removeItem(USER_INFO_KEY)
}
/**
 * 获取url传过来的参数
 * @param name 获取的参数
 * @param url 自定义获取参数的链接
 * @param return
 */
export function getUrlQuery(name, url) {
  let reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
  let hrefUrl = url || location.href
  if (reg.test(hrefUrl)) return decodeURI(RegExp.$2.replace(/\+/g, ' '))
  return ''
}
/**
 * 绑定socket
 */
export function bindsocket(e) {
  let params = {
    socketid: e
  }
  // eslint-disable-next-line no-unused-vars
  ajax.post("/bindsocket", params, function (res) {
    // window.console.log(res);
    // eslint-disable-next-line no-unused-vars
  }, function (err) {
    // window.console.log('error' + err);
  });
}
/* 
 *保证用户cookie有效
 */
export function gettime(){
  // eslint-disable-next-line no-unused-vars
  ajax.post("/getTime", {}, function (res) {
    // window.console.log(res);
    // eslint-disable-next-line no-unused-vars
  }, function (err) {
    // window.console.log('error' + err);
  });
}