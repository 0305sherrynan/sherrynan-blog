

import { requestInstance } from "@/libs/axios";
import {commentApi} from '#/api'
/**
 * submitCom 提交评论
 * getParentCom 获取评论区的父表
 * submitSonCom 提交评论 (子表)
 * getSonCom 获取评论区的子表
 * getSonComByParentID 获取评论区的子表 by parentID
 */
export const  submitCom = (dataForm:Comment.submitComment)=>{
    return requestInstance.post<any,commentApi.postRequestResponse<{message:string}>>("zwz/api/comment/submitCom",dataForm)
}
export const  getParentCom = ()=>{
    return requestInstance.get<any,commentApi.getRequestResponse<Comment.getParentComent>>("zwz/api/comment/getParentCom")
}
export const  submitSonCom = (dataForm:{})=>{
    return requestInstance.post<any,commentApi.postRequestResponse<{message:string}>>("zwz/api/comment/submitSonCom",dataForm)
}

export const  getSonComByParentID = (parentid:string)=>{
    return requestInstance.get<any,commentApi.getRequestResponse<commentApi.getSonComentByid> | commentApi.postRequestResponse<{message:string}>>(`zwz/api/comment/getSonCom/${parentid}`)
}


