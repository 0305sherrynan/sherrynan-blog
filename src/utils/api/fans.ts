import { requestInstance } from "@/libs/axios";
import {getRequestResponse,postRequestResponse} from '#/api'
import { fansApi } from "#/api"
/**
 *  postFocusUser 增加关注
 * focusVerify 是否已关注
 * getFocus 获取关注列表的id
 * getFocusDetail 获取指定关注对象的细节信息
 * cancelFocus 取消对某用户的关注
 */
export const postFocusUser = (id:string)=> {
    console.log('开始执行')
    return requestInstance.post<any,postRequestResponse<{message:string}>>("zwz/api/fans/focus",{id})
}
// /focus/verify
export const focusVerify = (id:string)=> {
    return requestInstance.post<any,postRequestResponse<{message:string}>>("zwz/api/fans/focus/verify",{id})
}

export const getFocus = ()=> {
    return requestInstance.get<any,getRequestResponse<fansApi.getCurrentUserFocus> | postRequestResponse<{message:string}>>("zwz/api/fans/focus")
}
export const getFocusById = (id:string)=> {
    return requestInstance.get<any,postRequestResponse<fansApi.singleFocusInfo>>(`zwz/api/fans/focus/${id}`)
}

export const cancelFocus = (id:string)=> {
   console.log('开始执行')
    return requestInstance.post<any,postRequestResponse<{message:string}>>(`zwz/api/fans/focus/cancel`,{id})
}
