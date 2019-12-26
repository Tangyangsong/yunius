import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomCode:'',
		keyboardSound: false,
		backImage:require('../assets/images/game_bg.png'),
		hasLogin: false,
		userInfo: {},
		gameconfig:{},
  },
  mutations: {
    getroomCode(state,codee){
			state.roomCode = codee;
		},
		switchSound(state,sound){
			state.keyboardSound = sound;
		},
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			// uni.setStorage({//缓存用户登陆状态
			//     key: 'userInfo',  
			//     data: provider  
			// })
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
      //uni.removeStorage({ key: 'userInfo' })
    }
  },
  actions: {
  },
  modules: {
  }
})
