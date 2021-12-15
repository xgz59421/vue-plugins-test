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
      }
    ]
  }


export default routes