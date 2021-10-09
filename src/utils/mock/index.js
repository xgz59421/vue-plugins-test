// const files = require.context('./modules', true, /\.js$/)

// let mocks = []

// files.keys().forEach(file => {
//   const tmpMock = files(file).default
//   if (tmpMock === undefined || tmpMock == null) {
//     return
//   }
//   mocks = mocks.concat(tmpMock)
// });

// export default mocks

import Mock from 'mockjs'
import homeApi from './modules/home'
import userApi from './modules/user'


// 设置200-2000毫秒延时请求数据
// Mock.setup({
//   timeout: '200-2000'
// })

// 首页相关
// 拦截的是 /home/getData
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)
