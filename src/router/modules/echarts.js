import Layout from '@/layout/index.vue'

const routes = {
  index: 4,
  path: '/',
  component: Layout,
  name: 'echarts',
  children: [{
    path: '/line-toolbox',
    name: 'line-toolbox',
    component: () => import('@/views/echarts/line-toolbox.vue')
  },{
    path: '/line-dataset',
    name: 'line-dataset',
    component: () => import('@/views/echarts/line-dataset.vue')
  }, {
    path: '/bar',
    name: 'bar',
    component: () => import('@/views/echarts/bar.vue')
  }, {
    path: '/pie-rich',
    name: 'pie-rich',
    component: () => import('@/views/echarts/pie-rich.vue')
  }, {
    path: '/map',
    name: 'map',
    component: () => import('@/views/echarts/map.vue')
  }]
}

export default routes