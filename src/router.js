import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/index',
      name: 'index',
      title: '游戏大厅',
      component: () => import('@/pages/index.vue'),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/game-room',
      name: 'game-room',
      title: '游戏房间',
      component: () => import('@/pages/game-room.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/user-info',
      name: 'user-info',
      title: '个人中心',
      component: () => import('@/pages/user-info.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      title: '联系我们',
      component: () => import('@/pages/contact-us.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/modif-info',
      title: '修改资料',
      name: 'modif-info',
      component: () => import('@/pages/modif-info.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/score-histories',
      name: 'score-histories',
      title: '上下分记录',
      component: () => import('@/pages/score-histories.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      title: '登录-53加盟网',
      component: () => import('@/pages/login.vue')
    },
    {
      path: '/set-room',
      name: 'set-room',
      title: '房间号',
      component: () => import('@/pages/set-room.vue')
    },
    {
      path: '/register',
      name: 'register',
      title: '注册',
      component: () => import('@/pages/register.vue')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
