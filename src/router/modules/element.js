import Layout from '@/layout/index.vue'

const elementUiRouter = [{
    index: 1,
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
      // 自定义组件
      {
        path: '/button',
        component: () => import('@/views/myElement/ButtonExample.vue')
      },
      {
        path: '/input',
        component: () => import('@/views/myElement/InputExample.vue')
      },
      {
        path: '/intinput',
        component: () => import('@/views/myElement/IntInputExample.vue')
      },
      {
        path: '/decimalinput',
        component: () => import('@/views/myElement/DecimalInputExample.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

export default elementUiRouter