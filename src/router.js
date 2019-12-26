import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      title: '登录-53加盟网',
      component: () => import('@/pages/login.vue')
    },
    // {
    //   path: '/set-room',
    //   name: 'set-room',
    //   title: '注册-53加盟网',
    //   component: () => import('@/pages/set-room.vue')
    // },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})