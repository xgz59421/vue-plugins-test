import Layout from '@/layout/index.vue'

const routes = {
    index: 2,
    path: '/',
    component: Layout,
    name: '插件',
    children: [
      // 一个轻量级的，稳健的，优雅简洁的语法高亮插件
      {
        path: '/prismjs',
        name: '语法高亮',
        component: () => import('@/views/prismjs.vue')
      },
      // 在页面展示一个或多个被分割的区块
      {
        path: '/vue-splitpane',
        name: '分割区块',
        component: () => import('@/views/vue-splitpane.vue')
      },
      {
        path: '/i18n',
        name: '国际化',
        component: () => import('@/views/i18n.vue')
      },
      {
        path: '/mock',
        name: 'mock',
        component: () => import('@/views/mock.vue')
      }
    ]
  }


export default routes