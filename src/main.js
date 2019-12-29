import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { getUserStorage } from '@/serve/service'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import ajax from './serve/ajax'
import store from './store'
import toastMessage from '@/plugins/ToastMessage' // message 提示消息插件
import modal from './plugins/modal/index';// modal 提示框
import VueScroller from 'vue-scroller'//滚动框

Vue.use(modal)
Vue.use(toastMessage)
Vue.use(VueScroller)

// import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';
// import theme from 'muse-ui/lib/theme';

// theme.add('teal', {
//   primary: '#F9C410',
//   secondary: '#ff4081',
//   success: '#4caf50',
//   warning: '#e64340',
// }, 'light');
// theme.use('teal');
// import { Button, Select, Switch} from 'muse-ui';
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Switch);
Vue.prototype.$ajax = ajax;
Vue.config.productionTip = false

router.beforeEach((to, from, next) =>{
  let room = JSON.parse(window.localStorage.getItem('room'));
  if(to.meta.requireAuth){//判断是否需要登录权限
    // console.log(room)
    if(room){
      store.commit('getroomCode', room);
      if (getUserStorage()) {
        if (!store.state.hasLogin) {
          store.commit('setUserInfo', {...getUserStorage()})
        }
        next()
      } else {
        if (to.path === '/login') {
          next()
        }else{
          next({ path: '/login' })
        }
      }
    }else{
      if (to.path === '/set-room') {
        next()
      }else{
        next({ path: '/set-room' })
      }
    }
  }else{
    if(to.path === '/login' || to.path === '/register'){
      if(room){
        store.commit('getroomCode', room);
      }
      next()
    }else{
      next()
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
