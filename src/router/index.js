import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      // 一个轻量级的，稳健的，优雅简洁的语法高亮插件
      {
        path: '/prismjs',
        component: () => import('@/views/prismjs.vue')
      },
      // 在页面展示一个或多个被分割的区块
      {
        path: '/vue-splitpane',
        component: () => import('@/views/vue-splitpane.vue')
      },
      // 国际化
      {
        path: '/i18n',
        component: () => import('@/views/i18n.vue')
      },
      {
        path: '/mock',
        component: () => import('@/views/mock.vue')
      },
      // cnfubutton
      {
        path: '/cnfubutton',
        component: () => import('@/views/cnfu/cnfuButtonExample.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router