import { requestInstance } from "@/libs/axios";
import { userApi } from "@/types/api";
import {StorageHandler,StorageType} from '@/libs/storage'
import { da } from "element-plus/es/locale";

/**
 * verifyLoginInfo 验证登录信息
 * judgeEmailRegisted 判断该email是否已被注册
 * registerAccount 注册账号
 * getPersonInfo 获取个人信息 可以修改成直接从storage取
 * modifyPersonInfo 修改个人信息 (全部修改)
 * modifyPasInfo 修改个人密码 
 */

export const verifyLoginInfo = (dataForm:{})=>{
    return requestInstance.post<any,userApi.postRequestResponse<{message:string,token:string}>>('zwz/api/user/login',dataForm)
}
export const judgeEmailRegisted = (email:string)=>{
    return requestInstance.post<any,userApi.postRequestResponse<{message:string}>>('zwz/api/user/judgeRegisterd',{email})
}
export const registerAccount = (dataForm:{})=>{
    return requestInstance.post<any,userApi.postRequestResponse<{message:string}>>('zwz/api/user/register',dataForm)
}
export const getPersonInfo = ()=>{
    return requestInstance.get<any,userApi.postRequestResponse<User.get_personal_info>>('zwz/api/user/getInfo')
}
export const modifyPersonInfo = (dataForm:{})=>{
    console.log('req',dataForm)
    return requestInstance.post<any,userApi.postRequestResponse<{message:string}>>('zwz/api/user/modifyInfo',dataForm)
}
export const modifyPasInfo = (dataForm:{})=>{
    return requestInstance.post<any,userApi.postRequestResponse<{message:string}>>('zwz/api/user/modifyPas',dataForm)
}