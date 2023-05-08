

import { requestInstance } from "@/libs/axios";
import {commentApi,getRequestResponse,postRequestResponse} from '#/api'
/**
 * submitCom 提交评论
 * getParentCom 获取评论区的父表
 * submitSonCom 提交评论 (子表)
 * getSonCom 获取评论区的子表
 * getSonComByParentID 获取评论区的子表 by parentID
 * getReplyedInfo 获取被回复者的相关信息
 */
export const  submitCom = (dataForm:Comment.submitComment)=>{
    return requestInstance.post<any,postRequestResponse<{message:string}>>("zwz/api/comment/submitCom",dataForm)
}
export const  getParentCom = ()=>{
    return requestInstance.get<any,getRequestResponse<Comment.getParentComent>>("zwz/api/comment/getParentCom")
}
export const  submitSonCom = (dataForm:{})=>{
    return requestInstance.post<any,postRequestResponse<{message:string}>>("zwz/api/comment/submitSonCom",dataForm)
}

export const  getSonComByParentID = (parentid:string)=>{
    return requestInstance.get<any,getRequestResponse<commentApi.getSonComentByid> | postRequestResponse<{message:string}>>(`zwz/api/comment/getSonCom/${parentid}`)
}


export const getReplyedInfo  = (dataForm:commentApi.getReplyedInfo_reqParams)=>{
    const replyid = dataForm.replyid
    // console.log(12)
    return requestInstance.get<any,postRequestResponse<commentApi.getReplyedInfo_resParams>>(`zwz/api/comment/getReplyedInfo/${replyid}`)
}


