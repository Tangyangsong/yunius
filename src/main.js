import Vue from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import ajax from './serve/ajax'
import store from './store'

import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import theme from 'muse-ui/lib/theme';
theme.use('dark');

import { Button, Select, Switch} from 'muse-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(Switch);
Vue.prototype.$ajax = ajax;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
