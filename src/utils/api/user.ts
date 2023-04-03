import { requestInstance } from "@/libs/axios";
import { userApi } from "@/types/api";
import {StorageHandler,StorageType} from '@/libs/storage'

/**
 * verifyLoginInfo 验证登录信息
 * judgeEmailRegisted 判断该email是否已被注册
 * registerAccount 注册账号
 */

export const verifyLoginInfo = (dataForm:{})=>{
    return requestInstance.post<any,userApi.postRequestResponse<{message:string,token:string}>>('zwz/api/user/login',dataForm)
}
export const judgeEmailRegisted = (email:string)=>{
    // const storage = new StorageHandler
    return requestInstance.post<any,userApi.postRequestResponse<{message:string}>>('zwz/api/user/judgeRegisterd',{email})
}
export const registerAccount = (dataForm:{})=>{
    // const storage = new StorageHandler
    return requestInstance.post<any,userApi.postRequestResponse<{message:string}>>('zwz/api/user/register',dataForm)
}