const path = require('path')
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const isDev = process.env.NODE_ENV === 'dev'
console.log('isDev', isDev)
module.exports = {
  publicPath: isDev ? '/' : '/vue-plugins-test',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }
    } 
  }
}