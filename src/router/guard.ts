import router from './index'
import { StorageHandler,StorageType } from '@/libs/storage'

router.beforeEach((to,from,next)=>{
    const storage = new StorageHandler()
    //获取token
    const token = storage.getItem(StorageType.Local,'token')
    //不需要token 直接通行
    if (to.matched.some(value=>to.meta.freePass)) {
        next()
    }
    else { //需要token
        //token为空，跳转登录页
        if (token == null) {
            // console.log(123)
            next({name:'entrance',params:{operate:'login'}})
        }
        //token有
        else{
            next()
        }
    }
})