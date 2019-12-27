import Vue from 'vue'
import Vuex from 'vuex'
import * as CalcService from '@/serve/service'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomCode:'vd041545',
	keyboardSound: false,
	backImage:require('../assets/images/game_bg.png'),
	hasLogin: false,
	userInfo: {},
	gameconfig:{},
  },
  mutations: {
	/* 存放用户信息 */
	setUserInfo (state, payload) {
		state.userInfo = {...state.userInfo, ...payload}
		state.hasLogin = true
		
		window.console.log(state.userInfo)
		CalcService.setUserStorage(state.userInfo)
	},
    getroomCode(state,codee){
		state.roomCode = codee;
	},
	switchSound(state,sound){
		state.keyboardSound = sound;
	},
	// login(state, provider) {
	// 	state.hasLogin = true;
	// 	state.userInfo = provider;
	// 	window.localStorage.setItem('userInfo', JSON.stringify(provider));//缓存用户登陆状态
	// },
	logout(state) {
		state.hasLogin = false;
		state.userInfo = {};
		window.localStorage.removeItem("userInfo");//删除用户登陆状态
    }
  },
  actions: {
	
  },
  modules: {
  }
})
