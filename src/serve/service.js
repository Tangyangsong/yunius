// import fetch from '../config/fetch'
// import upload from '../config/upload'

const USER_INFO_KEY = 'userInfo' // 用户信息
export const HTTP_HOST = "http://39.99.243.197:801";

export const AJAX_URL = "/cppc3/web/api";
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
export function getUrlQuery (name, url) {
  let reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
  let hrefUrl = url || location.href
  if (reg.test(hrefUrl)) return decodeURI(RegExp.$2.replace(/\+/g, ' '))
  return ''
}

/**
 * 发送验证码
 * @param {object} [params]
 * @param {string} [params.phone] - 手机号
 */
export const sendMsgCode = (params) => fetch('/customer/verificationcode', params)
