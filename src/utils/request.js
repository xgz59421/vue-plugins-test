
/**
 * ajax请求配置
 */
 import Vue from 'vue'
//  import { Toast } from 'vant';
 import axios from 'axios'
 
 // axios默认配置
 axios.defaults.timeout = 30000 // 超时时间
 // axios.defaults.baseURL = process.env.VUE_APP_BASEURL // 默认地址
//  let toast;
 // 整理数据
 axios.defaults.transformRequest = function (data) {
   data = JSON.stringify(data)
   return data
 }
 
 // 路由请求拦截
 // http request 拦截器
 axios.interceptors.request.use(
   
   config => {
    const token = localStorage.getItem('userToken')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.accessToken = token
    }
    return config;

     // console.log('config', config);
     // 在发送请求之前做某事
    //  toast = Toast.loading({
    //    duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
    //    forbidClick: true,  // 是否禁止背景点击
    //  });
     config.headers['Content-Type'] = 'application/json;charset=UTF-8'
     return config
   },
   error => {
     // 请求错误时做些事
    //  toast.clear();
     return Promise.reject(error.response)
   })
 
 // 路由响应拦截
 // http response 拦截器
 axios.interceptors.response.use(
   response => {
     // 对响应数据做些事
    //  toast.clear();  
     return response
   },
   error => {
     Vue.$loading.hide()
     return Promise.reject(error.response) // 返回接口返回的错误信息
   })
 export default axios
 