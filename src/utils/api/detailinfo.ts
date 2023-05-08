import { requestInstance } from "@/libs/axios";
import {getRequestResponse,postRequestResponse} from '#/api'
/**
 * getDeailInfo 获取当前用户的信息
 * modifyInfo 修改信息
 * getDailInfoByID 获取对应用户的信息（by id）
 */
export const  getDeailInfo = ()=>{
    return requestInstance.get<any,postRequestResponse<Detail.getDetailInfo>>("zwz/api/detail/getInfo")
}
export const getDailInfoByID =(id:string)=>{
    return requestInstance.get<any,postRequestResponse<Detail.getDetailInfo> | postRequestResponse<{message:string}>>(`zwz/api/detail/getInfo/${id}`)
}
export const modifyInfo = (dataForm:Detail.modifyInfo)=>{
    return requestInstance.post<any,postRequestResponse<{message:string}>>("zwz/api/detail/modifyInfo",dataForm)
}

