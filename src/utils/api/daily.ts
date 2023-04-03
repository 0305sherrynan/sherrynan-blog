import { requestInstance } from "@/libs/axios";
import {dailyApi} from '#/api'
/**
 * getDailyInfo 获取对应用户id的daily
 * submitOneDailyInfo 提交单个daily到数据库
 */
export const  getDailyInfo = ()=>{
    return requestInstance.get<any,dailyApi.getRequestResponse<Daily.Daily_all>>("zwz/api/daily")
}

export const submitOneDailyInfo = (data:Daily.Daily_Exclude_id)=>{
    return requestInstance.post<any,dailyApi.postRequestResponse<{message:string}>>("zwz/api/daily",data)
}