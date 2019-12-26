import fetch from '../config/fetch'
import upload from '../config/upload'
const USER_INFO_KEY = 'user_key' // 用户信息

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

/**
 * 验证码验证
 * @param {object} [params]
 * @param {string} [params.asaccount] - 帐号
 * @param {string} [params.code] - 验证码
 */
export const validationCode = (params) => fetch('/customer/registercode', params)

/**
 * 会员注册
 * @param {object} [params]
 * @param {string} [params.asaccount] - 帐号
 * @param {string} [params.rcode] - 推荐码
 * @param {string} [params.password] - 密码
 * @param {string} [params.nickname] - 昵称
 * @param {string} [params.urlimg] - 图片地址
 */
export const registerFun = (params) => fetch('/customer/registermobile', params)

/**
 * 登录
 * @param {object} [params]
 * @param {string} [params.username] - 账号
 * @param {string} [params.password] - 密码
 */
export const loginFun = (params) => fetch('/customer/login', params)

/**
 * 获取用户信息
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const getUserInfo = (params) => fetch('/customer/getuser', params)

/**
 * 上传图片
 * @param {object} [params]
 * @param {string} [params.files] - 图片}
 * @param {string} [params.type] - Type:分类 1会员头像 2会图片 3私聊图片 4举报好友图片;
 */
export const uploadImg = (params) => upload('/Customer/UploadImg', params)

/**
 * 修改头像
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.urlimg] - 图片地址
 */
export const updateHeadImg = (params) => fetch('/Customer/UpHead', params)

/**
 * 修改密码
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.oldpwd] - 原密码
 * @param {string} [params.newpwd] - 新密码
 */
export const updatePWD = (params) => fetch('/Customer/UpPwd', params)

/**
 * 找回密码(发送验证码)
 * @param {object} [params]
 * @param {string} [params.phone] - phone
 */
export const sendCodeBeforePW = (params) => fetch('/Customer/isSendCode', params)

/**
 * 找回密码(验证码验证)
 * @param {object} [params]
 * @param {string} [params.asaccount] - account
 * @param {string} [params.code] - code
 */
export const validateCodeBeforePW = (params) => fetch('/Customer/FindSendCode', params)

/**
 * 找回密码(设置新密码)
 * @param {object} [params]
 * @param {string} [params.asaccount] - account
 * @param {string} [params.password] - password
 * @param {string} [params.code] - code
 */
export const setNewPW = (params) => fetch('/Customer/FindPassword', params)

/**
 * 冻结账号
 * @param {object} [params]
 * @param {string} [params.asaccount] - account
 * @param {string} [params.userno] - 会员编码
 * @param {string} [params.appealclass] - 申诉分类 1冻结 2解冻
 * @param {string} [params.reason] - 申诉理由
 */
export const freezeAccount = (params) => fetch('/Customer/FrozenApply', params)

/**
 * 修改昵称
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.nickname] - 昵称
 */
export const updateNickName = (params) => fetch('/Customer/UpNickname', params)

/**
 * 修改推荐码
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.code] - code
 */
export const updateRecommendCode = (params) => fetch('/Customer/UpReferralCode', params)

/**
 * 设置定位开启或关闭
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.position] - 定位状态 0否 1是
 */
export const turnOffGeolocation = (params) => fetch('/Customer/UpLocation', params)

/**
 * 设置定位的经纬度
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.longitude] - 经度
 * @param {string} [params.latitude] - 纬度
 * @param {string} [params.Adress] - 经纬度地区
 */
export const setPosition = (params) => fetch('/Customer/UpWarpAndWeft', params)

/**
 * 获取资料
 * @param {object} [params]
 * @param {string} [params.uid] - id
 */
export const getMaterial = (params) => fetch('/Customer/GetUserMean', params)

/**
 * 获取爱好列表
 */
export const getHobbyList = () => fetch('/Customer/HobbyList')

/**
 * 完善资料
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.sex] - 性别 0保密 1女 2男
 * @param {string} [params.marriage] - 婚否 0保密 1未婚 2已婚
 * @param {string} [params.area] - 地区
 * @param {string} [params.age] - 年龄
 * @param {string} [params.hobby] - 爱好
 * {UID:会员ID;Sex:性别 0保密 1女 2男;Marriage:婚否 0保密 1未婚 2已婚;Area:地区;Age:年龄;Hobby:爱好;}
 */
export const saveMaterial = (params) => fetch('/Customer/UprMean', params)

/**
 * 绑定手机号(发送验证码)
 * @param {object} [params]
 * @param {string} [params.phone] - phone
 */
export const bindPhoneBefore = (params) => fetch('/Customer/BindCode', params)

/**
 * 绑定手机号
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.phone] - phone
 * @param {string} [params.code] - code
 */
export const bindPhone = (params) => fetch('/Customer/UpPhone', params)

/**
 * 获取我的发布列表
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.pages] -
 */
export const getMyReleaseList = (params) => fetch('/Customer/GetMyRelease', params)

/**
 * 删除我的发布列表
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.ids] - 例如：12,15 ;
 */
export const delMyReleaseList = (params) => fetch('/Customer/DelMyRelease', params)

/**
 * 获取我的收藏列表
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.pages] -
 */
export const getMyCollectionList = (params) => fetch('/Customer/GetMyCollection', params)

/**
 * 删除我的收藏列表
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.ids] - 例如：12,15;
 */
export const delMyCollectionList = (params) => fetch('/Customer/DelMyCollection', params)

/**
 * 修改好友备注
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.friendno] - 好友编号
 * @param {string} [params.remak] - 好友备注
 */
export const updateFriendRemark = (params) => fetch('/Private/UpFriendRemark', params)

/**
 * 会员反馈意见
 * @param {object} [params]
 * @param {string} [params.uid] - id
 * @param {string} [params.contents] - 意见
 */
export const feedbackContent = (params) => fetch('/Customer/Feedback', params)

/**
 * 获取常见问题列表
 */
export const getProblemList = () => fetch('/Customer/GetCommon')

/**
 * 获取分类信息列表
 * @param {object} [params]
 * @param {string} [params.type] - type
 * @param {number} [params.fid] - fid
 * @param {number} [params.pid] - pid
 */
export const getCategoryTypeList = (params) => fetch('/Meet/GetClassification', params)

/**
 * 获取分类信息列表(all)
 * @param {object} [params]
 * @param {string} [params.type] - type
 */
export const getAllCategoryList = (params) => fetch('/Meet/GetClassList', params)

/**
 * 获取热门搜索
 */
export const getSearchHot = () => fetch('/Meet/GetHot')

/**
 * 获取会的消息条数
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const getMsgNum = (params) => fetch('/Meet/GetNewNumber', params)

/**
 * 会列表
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.type] - type
 * @param {number} [params.tid] - 分类id
 * @param {number} [params.sort] - 排序 0默认 1附近 2转发量 3发布时间
 * @param {string} [params.search] - 搜索条件
 * @param {number} [params.pages] - 当前页
 */
export const getIndexList = (params) => fetch('/Meet/GetMeetList', params)

/**
 * 获取发布的会列表(未通过、申请、通过)
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const getPublishArticleList = (params) => fetch('/Meet/NewMeet', params)

/**
 * 删除会
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.id] - 会id
 */
export const delPublishArticle = (params) => fetch('/Meet/DelMeet', params)

/**
 * 会详细
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.tid] - 会id
 */
export const getDetail = (params) => fetch('/Meet/GetMeetDetail', params)

/**
 * 会员投诉会
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.tid] - 会id
 * @param {string} [params.userno] - 会员编号
 * @param {string} [params.phone] - 联系电话
 * @param {string} [params.username] - 用户名称
 * @param {string} [params.contents] - 投诉理由
 */
export const complaintFun = (params) => fetch('/Meet/Complains', params)

/**
 * 第一次同意投诉协议
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const agreeComplaint = (params) => fetch('/Meet/FirstComplaint', params)

/**
 * 会员转发会
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.tid] - 会id
 */
export const forwardArticle = (params) => fetch('/Meet/Relay', params)

/**
 * 会员收藏会
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.tid] - 会id
 */
export const collectionArticle = (params) => fetch('/Meet/Collection', params)

/**
 * 会员保存的会(判断)
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const isSaveArticle = (params) => fetch('/Meet/IsNotMeet', params)

/**
 * 第一次同意发布协议
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const agreePublishArticle = (params) => fetch('/Meet/FirstMeet', params)

/**
 * 发布会
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.id] - 会id
 * @param {string} [params.type] - 状态 0保存 1提交
 * @param {number} [params.cid] - 分类ID
 * @param {string} [params.cname] - 三级名称
 * @param {string} [params.ischat] - 私聊是否开启 0关闭 1开启
 * @param {string} [params.phone] - 手机号
 * @param {string} [params.contents] - 投诉理由
 * @param {string} [params.qq] - qq
 * @param {string} [params.wechat] - 微信号
 * @param {string} [params.website] - 网址
 * @param {string} [params.imgurl] - 上传图片
 */
export const publishArticle = (params) => fetch('/Meet/SubmitMeet', params)

/**
 * 获取好友发布会前几条信息
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.userno] - 会员编号
 */
export const getFriendBeforeArticle = (params) => fetch('/Meet/GetMemberMeet', params)

/**
 * 获取好友会列表
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.userno] - 会员编号
 * @param {number} [params.pages] - 当前页码
 */
export const getFriendArticleList = (params) => fetch('/Meet/GetMemberMeetList', params)

/**
 * 判断是否加好友
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.userno] - 会员编号
 */
export const isAddFriend = (params) => fetch('/Meet/PrivateChat', params)

/**
 * 精确添加查找(会员编号,会员账号)
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.usercode] - 会员编号
 */
export const getFriendsByPrecision = (params) => fetch('/Private/GetExact', params)

/**
 * 获取会员资料(会员编号)
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.usercode] - 会员编号
 */
export const getFriendInfoByCode = (params) => fetch('/Private/GetFriendData', params)

/**
 * 获取置顶状态(会员编号,会员账号)
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.UserNo] - 会员编号
 */
export const getUserFriendsTop = (params) => fetch('/Private/GetUserFriendsTop', params)

/**
 * 发送添加好友验证消息
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.userno] - 会员编号
 * @param {string} [params.news] - 验证信息
 */
export const sendMsgForVallidate = (params) => fetch('/Private/AddFriendApply', params)

/**
 * 附近添加查找
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {number} [params.pages] - 当前页
 */
export const getFriendsByNear = (params) => fetch('/Private/GetLocation', params)

/**
 * 条件添加查找
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {number} [params.sex] - 性别 1女 2男
 * @param {number} [params.marr] - 婚否 1未婚 2已婚
 * @param {number} [params.loc] - Loc:定位 0关 1开
 * @param {string} [params.area] - 地区
 * @param {string} [params.age] - 年龄
 * @param {string} [params.hobby] - 爱好
 * @param {string} [params.pages] - 当前页
 */
export const getFriendsByCondition = (params) => fetch('/Private/GetTerm', params)

/**
 * 获取与好友私聊未读条数
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const getMsgNumForFriend = (params) => fetch('/Private/GetFriendNumber', params)

/**
 * 好友信息列表
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.search] - 搜索条件
 */
export const getFriendList = (params) => fetch('/Private/GetUserFriendsList', params)

/**
 * 删除单个聊天记录
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 */
export const delChatByNo = (params) => fetch('/Private/DelChat', params)

/**
 * 删除多个聊天记录
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号  例如 000001，000002
 */
export const delChatList = (params) => fetch('/Private/DelChatList', params)

/**
 * 获取聊天记录
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 * @param {string} [params.Times] - 好友编号
 * @param {string} [params.pages] - 页码
 */
export const getChatMsgList = (params) => fetch('/Private/GetUserChatContent', params)

/**
 * 获取聊天记录（最新）
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 * @param {string} [params.Times] - 好友编号
 */
export const getNewChatMsg = (params) => fetch('/Private/GetUserChatContentNew', params)

/**
 * 聊天
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 * @param {number} [params.type] - 分类 1图片 2文本
 * @param {string} [params.content] - 内容
 */
export const chatOnline = (params) => fetch('/Private/AddChat', params)

/**
 * 修改消息接收状态
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 */
export const updateChatLine = (params) => fetch('/Private/UpChat', params)

/**
 * 好友置顶
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 * @param {string} [params.status] - 置顶标识 0关闭 1开启;
 */
export const setTop = (params) => fetch('/Private/CloseFriend', params)

/**
 * 删除好友
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 */
export const delFriend = (params) => fetch('/Private/DelFried', params)

/**
 * 举报好友
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.friendno] - 好友编号
 * @param {string} [params.reason] - 投诉原因
 * @param {string} [params.imgurl] - 上传证据 图片地址
 */
export const reportFriend = (params) => fetch('/Private/FriendReport', params)

/**
 * 获取消息需要处理条数
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const getMsgNumForVallidate = (params) => fetch('/Private/GetNewNumber', params)

/**
 * 获取好友申请消息列表
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.pages] - 当前页
 */
export const getApplyMsg = (params) => fetch('/Private/GetAddNewList', params)

/**
 * 审核好友申请
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.userno] - 好友编号
 * @param {string} [params.ok] - 1接受 2拒绝
 */
export const reviewApplyMsg = (params) => fetch('/Private/AddNew', params)

/**
 * 删除好友申请
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 * @param {string} [params.id] - 消息id
 */
export const delApplyMsg = (params) => fetch('/Private/DelNew', params)

/**
 * 获取配置信息
 * @param {object} [params]
 * @param {string} [params.Name] - 配置名称
 */
export const getBaseConfig = (params) => fetch('/Customer/GetConfig', params)

/**
 * 获取微信分享配置信息
 * @param {object} [params]
 * @param {string} [params.url] - 配置名称
 */
export const getWXConfig = (params) => fetch('/Customer/WeChatShareUrl', params)

/**
 * 判断登录是否过时
 * @param {object} [params]
 * @param {string} [params.uid] - uid
 */
export const userValid = (params) => fetch('/Customer/DecideUserValid', params)
