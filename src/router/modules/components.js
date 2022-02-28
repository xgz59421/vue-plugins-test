import Layout from '@/layout/index.vue'
import emptyView from '@/layout/emptyView.vue'

const routes = {
    index: 2,
    path: '/',
    component: Layout,
    name: '组件',
    children: [
      // 一个轻量级的，稳健的，优雅简洁的语法高亮插件
      {
        path: '/prismjs',
        name: '语法高亮',
        component: () => import('@/views/components/prismjs.vue')
      },
      {
        path: '/fileDownload',
        name: '文件下载',
        component: () => import('@/views/components/fileDownload.vue')
      },
      {
        path: '/xlsx',
        name: 'xlsx',
        component: () => import('@/views/components/xlsx.vue')
      },
      {
        path: '/handsontable',
        name: 'handsontable',
        component: () => import('@/views/components/handsontable.vue')
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
      {
        path: '/qrcode',
        name: '二维码',
        component: emptyView,
        children: [
          {
            path: '/qrcodejs2',
            name: 'qrcodejs2',
            component: () => import('@/views/components/qrcode/qrcodejs2.vue')
          },
          {
            path: '/vue-qr',
            name: 'vue-qr',
            component: () => import('@/views/components/qrcode/vue-qr.vue')
          },
        ]
      },
      {
        path: '/vue-pdf',
        name: 'vue-pdf',
        component: () => import('@/views/components/vue-pdf.vue')
      }
    ]
  }


export default routes