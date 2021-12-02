import Layout from '@/layout/index.vue'

const routes = {
    index: 1,
    path: '/',
    component: Layout,
    name: '组件',
    children: [
      // 自定义组件
      {
        path: '/button',
        name: '按钮',
        component: () => import('@/views/myElement/ButtonExample.vue')
      },
      {
        path: '/input',
        name: '普通输入框',
        component: () => import('@/views/myElement/InputExample.vue')
      },
      {
        path: '/intinput',
        name: '整数输入框',
        component: () => import('@/views/myElement/IntInputExample.vue')
      },
      {
        path: '/decimalinput',
        name: '浮点输入框',
        component: () => import('@/views/myElement/DecimalInputExample.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }


export default routes