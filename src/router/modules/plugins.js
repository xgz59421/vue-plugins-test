import Layout from '@/layout/index.vue'

const routes = {
    index: 3,
    path: '/',
    component: Layout,
    name: '插件',
    children: [
      {
        path: '/i18n',
        name: '国际化',
        component: () => import('@/views/plugins/i18n.vue')
      },
      {
        path: '/font-awesome',
        name: 'font-awesome',
        component: () => import('@/views/plugins/font-awesome.vue')
      },
      {
        path: '/mock',
        name: 'mock',
        component: () => import('@/views/plugins/mock.vue')
      },
      {
        path: '/moment',
        name: 'moment',
        component: () => import('@/views/plugins/moment.vue')
      },
      {
        path: '/dayjs',
        name: 'dayjs',
        component: () => import('@/views/plugins/dayjs.vue')
      },
      {
        path: '/encrypt',
        name: 'md5-aes',
        component: () => import('@/views/plugins/encrypt.vue')
      }
    ]
  }


export default routes