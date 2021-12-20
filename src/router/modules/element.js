import Layout from '@/layout/index.vue'

const routes = {
    index: 1,
    path: '/',
    component: Layout,
    name: 'element',
    children: [
      // 自定义组件
      {
        path: '/button',
        name: '按钮',
        component: () => import('@/views/element/el-button.vue')
      },
      {
        path: '/input',
        name: '普通输入框',
        component: () => import('@/views/element/el-input.vue')
      },
      {
        path: '/intinput',
        name: '整数输入框',
        component: () => import('@/views/element/el-int-input.vue')
      },
      {
        path: '/decimalinput',
        name: '浮点输入框',
        component: () => import('@/views/element/el-decimal-input.vue')
      },
      {
        path: '/vue-cron',
        name: 'vue-cron',
        component: () => import('@/views/element/vue-cron.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }


export default routes