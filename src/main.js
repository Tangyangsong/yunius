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
Vue.use(modal)
Vue.use(toastMessage)

import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import theme from 'muse-ui/lib/theme';

theme.add('teal', {
  primary: '#F9C410',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#e64340',
}, 'light');

theme.use('teal');

import { Button, Select, Switch} from 'muse-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(Switch);
Vue.prototype.$ajax = ajax;
Vue.config.productionTip = false


router.beforeEach(function (to, from, next) {
  if (getUserStorage()) {
    if (!store.state.hasLogin) {
      store.commit('setUserInfo', {...getUserStorage()})
    }
    next()
  } else {
    if (to.meta.requiresAuth) {
      next('/login')
    } else {
      next()
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
