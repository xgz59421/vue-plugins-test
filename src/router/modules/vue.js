import Layout from '@/layout/index.vue'

const routes = {
    index: 0,
    path: '/',
    component: Layout,
    name: 'vue',
    children: [
      // 一个轻量级的，稳健的，优雅简洁的语法高亮插件
      {
        path: '/',
        name: '.env配置',
        component: () => import('@/views/vue/env.vue')
      },
    ]
  }


export default routes