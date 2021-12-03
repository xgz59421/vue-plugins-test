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
      },
      {
        path: '/qrcodejs2',
        name: 'qrcodejs2',
        component: () => import('@/views/plugins/qrcodejs2.vue')
      },
      {
        path: '/vue-qr',
        name: 'vue-qr',
        component: () => import('@/views/plugins/vue-qr.vue')
      },
      {
        path: '/vue-pdf',
        name: 'vue-pdf',
        component: () => import('@/views/plugins/vue-pdf.vue')
      }
    ]
  }


export default routes