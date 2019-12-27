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
    {
      path: '/index',
      name: 'index',
      title: '游戏大厅',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/game-room',
      name: 'game-room',
      title: '游戏房间',
      component: () => import('@/pages/game-room.vue')
    },
    {
      path: '/set-room',
      name: 'set-room',
      title: '房间号',
      component: () => import('@/pages/set-room.vue')
    },
    {
      path: '/user-info',
      name: 'user-info',
      title: '个人中心',
      component: () => import('@/pages/user-info.vue')
    },
    {
      path: '/register',
      name: 'register',
      title: '注册',
      component: () => import('@/pages/register.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})