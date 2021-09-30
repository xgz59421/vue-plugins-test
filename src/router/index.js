import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  // 一个轻量级的，稳健的，优雅简洁的语法高亮插件
  {
    path: '/prismjs',
    component: () => import('../views/prismjs.vue')
  },

  // 在页面展示一个或多个被分割的区块
  {
    path: '/vue-splitpane',
    component: () => import('../views/vue-splitpane.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router