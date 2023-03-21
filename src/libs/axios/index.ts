import { StorageHandler,  StorageType} from "../storage";
// import message from "../zwzUI/message";
// import {useUserStore} from '@/store/user'
// import router from "@/router";
import axios from "axios";
// import { config } from "process";


// const store  = useUserStore()
/**
 * 不同报错的回应
 * @param status 
 * @param other 
 */
// const errorHandle = (status: number, other: string) => {
//     // 状态码判断
//     switch (status) {
  
//       case 302: message.error('接口重定向了！');
//         break;
//       case 400:
//         message.error("发出的请求有错误，服务器没有进行新建或修改数据的操作==>" + status)
//         break;
//       // 401: 未登录
//       // 未登录则跳转登录页面，并携带当前页面的路径
//       // 在登录成功后返回当前页面，这一步需要在登录页操作。                
//       case 401: //重定向
//         message.error("token:登录失效==>" + status + ":" + store.user)
//         StorageHandler.remove(StorageType.Local,store.user.username)
//         StorageHandler.getItem(StorageType.Local,store.user.username)
//         router.replace({
//           path: '/Login',
//         });
//         break;
//       // 403 token过期
//       // 清除token并跳转登录页
//       case 403:
//         message.error("登录过期,用户得到授权，但是访问是被禁止的==>" + status)
//         // store.commit('token', null);
//         setTimeout(() => {
//           router.replace({
//             path: '/Login',
//           });
//         }, 1000);
//         break;
//       case 404:
//         message.error("网络请求不存在==>" + status)
//         break;
//       case 406:
//         message.error("请求的格式不可得==>" + status)
//         break;
//       case 408: message.error(" 请求超时！")
//         break;
//       case 410:
//         message.error("请求的资源被永久删除，且不会再得到的==>" + status)
//         break;
//       case 422:
//         message.error("当创建一个对象时，发生一个验证错误==>" + status)
//         break;
//       case 500:
//         message.error("服务器发生错误，请检查服务器==>" + status)
//         break;
//       case 502:
//         message.error("网关错误==>" + status)
//         break;
//       case 503:
//         message.error("服务不可用，服务器暂时过载或维护==>" + status)
//         break;
//       case 504:
//         message.error("网关超时==>" + status)
//         break;
//       default:
//         message.error("其他错误错误==>" + status)
//     }
//   }

/**
 * 声明一个request实例并暴露
 */
export const requestInstance = axios.create({
  baseURL:'http://localhost:8080/',
  timeout:5000
})

/**
 * 声明responseInterceptor和requestInterceptor
 */
requestInstance.interceptors.request.use((config)=>{
  //查看token
  // if (StorageHandler.getItem(StorageType.Local,'token')){
  //   config.headers.Authorization = StorageHandler.getItem(StorageType.Local,'token')
  // }
  return config
},(err)=>{
  return Promise.reject(err)
})
requestInstance.interceptors.response.use((response)=>{
  if (response.status == 200 || response.status == 204){
    // return Promise.resolve(config)
    return response.data.result
  }else{
    // return Promise.reject(config)
  }
},(err)=>{
  // const {response} = err
  // errorHandle(response.status,response.data.message)
})



  