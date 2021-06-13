// // 请求相关的方法
// //进度条导入
//  import NProgress from 'nprogress'
//  import 'nprogress/nprogress.css'

//  import axios from 'axios'


// //初始化对象
// var instance= axios.create({
//   //接口地址
//   baseURL:'http://bingjs.com:83',
//   //超时时间
//   Timeout:30000,
// })


// // 添加请求拦截器
// instance.interceptors.request.use(function (config) {
//   NProgress.done()

//   return config;

// }, function (error) {

//   NProgress.done()
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//   NProgress.done()
//   // 对响应数据做点什么
//   return response;
// }, function (error) {

//   // 对响应错误做点什么
//   NProgress.done()
//   return Promise.reject(error);
// });





// //创建get请求
// let get= async function(url,params){
//   return instance.get(url,{params})
// }
// //创建post请求
// let post=async function(url,params){
//   return instance.post(url,params,)
  
// }

// export {
//   get,post
// }
