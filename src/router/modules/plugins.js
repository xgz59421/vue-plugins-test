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
        component: () => import('@/views/plugins/prismjs.vue')
      },
      {
        path: '/i18n',
        name: '国际化',
        component: () => import('@/views/plugins/i18n.vue')
      },
      {
        path: '/mock',
        name: 'mock',
        component: () => import('@/views/plugins/mock.vue')
      }
    ]
  }


export default routes