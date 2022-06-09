import Layout from '@/layout/index.vue'

const routes = {
    index: 0,
    path: '/',
    component: Layout,
    name: 'vue',
    children: [
      {
        path: '/',
        name: 'todo',
        component: () => import('@/components/todo.vue'),
        hidden: true
      },
      // 一个轻量级的，稳健的，优雅简洁的语法高亮插件
      {
        path: '/env',
        name: '.env配置',
        component: () => import('@/views/vue/env.vue')
      },
      {
        path: '/keep',
        name: 'keep-alive',
        meta: {
          keepAlive: true
        },
        component: () => import('@/views/vue/keepAlive.vue')
      },
    ]
  }


export default routes