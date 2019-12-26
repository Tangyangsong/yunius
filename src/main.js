import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import ajax from './serve/ajax'
import store from './store'

Vue.prototype.$ajax = ajax;


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
