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
        component: () => import('@/views/components/el-button.vue')
      },
      {
        path: '/input',
        name: '普通输入框',
        component: () => import('@/views/components/el-input.vue')
      },
      {
        path: '/intinput',
        name: '整数输入框',
        component: () => import('@/views/components/el-int-input.vue')
      },
      {
        path: '/decimalinput',
        name: '浮点输入框',
        component: () => import('@/views/components/el-decimal-nput.vue')
      },
      {
        path: '/slicksort',
        name: '拖拽排序组件',
        component: () => import('@/views/components/vue-slicksort.vue')
      },
      // 在页面展示一个或多个被分割的区块
      {
        path: '/vue-splitpane',
        name: '分割区块',
        component: () => import('@/views/components/vue-splitpane.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }


export default routes