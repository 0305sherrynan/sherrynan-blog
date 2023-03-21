import router from "./index";
// import {useUserStore} from '@/store/user'
// import {StorageType,StorageHandler} from '@/libs/storage'
// //前置路由守卫
// router.beforeEach((to,from,next) =>{
//     console.log(1234213)
//     // const state = useUserStore()
//     const storageHandler = new StorageHandler()
//     // console.log(123)
//     //若无token
//     console.log(storageHandler.getItem(StorageType.Local,'token'))
//     if (storageHandler.getItem(StorageType.Local,'token') === null ){
//          //且 to的界面需要权限 则跳转login
//          console.log(1234555)
//         if (!to.matched.some(value=>value.meta.requiresAuth))
//         {
//             console.log(13)
//             next()
//         }else{
//             console.log(123)
//             next({ name:'login'})
//         }
//         next()
//     }
//     //有token
//     else {
//         //但pinia没有user信息，则是因为刷新而导致的用户登录状态消息，需要重新获取,从本地存储便可获取到
//         const userStore = useUserStore()
//         console.log(userStore.user)
//         if (JSON.stringify(userStore.user) === '{}') {
//             // parse第一个参数为string类型 而getItem为string | null 所以当为null的时候我们parse一个''
//             //不可直接赋值 应该浅拷贝
//             // userStore.user = JSON.parse(storageHandler.getItem(StorageType.Local,'user') || "''")
//             userStore.user = Object.assign(userStore.user,JSON.parse(storageHandler.getItem(StorageType.Local,'user') || "''"))
//             console.log(userStore.user)
//         }
//     }
//     next()
// })