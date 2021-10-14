const dynamicModules = []
// 参数1 String: 读取文件的路径
// 参数2 Boolean: 是否遍历文件的子目录
// 参数3 RegExp: 匹配文件的正则
const files = require.context('./element', true, /\.js$/)
// console.log(files);
files.keys().forEach(e => {
  // console.log(e);
  // console.log(files(e));
  './index.js' != e && dynamicModules.push(files(e).default)
});

// console.log(dynamicModules);
export default dynamicModules