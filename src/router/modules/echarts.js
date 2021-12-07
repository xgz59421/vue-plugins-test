import Layout from '@/layout/index.vue'

const routes = {
  index: 4,
  path: '/',
  component: Layout,
  name: 'echarts',
  children: [{
    path: '/line',
    name: 'line',
    component: () => import('@/views/echarts/line.vue')
  }, {
    path: '/bar',
    name: 'bar',
    component: () => import('@/views/echarts/bar.vue')
  }, {
    path: '/map',
    name: 'map',
    component: () => import('@/views/echarts/map.vue')
  }, {
    path: '/report',
    name: 'report',
    component: () => import('@/views/echarts/example-report.vue')
  }]
}

export default routes