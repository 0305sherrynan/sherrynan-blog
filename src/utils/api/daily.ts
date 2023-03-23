import { requestInstance } from "@/libs/axios";
import {dailyApi} from '#/api'
export const  getDailyInfo = ()=>{
    return requestInstance.get<any,dailyApi.getRequestResponse<Daily.Daily_all>>("zwz/api/daily",{params:{user_id:'26421983'}})
}

export const submitOneDailyInfo = (data:Daily.Daily_Exclude_id)=>{
    return requestInstance.post<any,dailyApi.postRequestResponse<{message:string}>>("zwz/api/daily",Object.assign(data,{user_id:'26421983'}))
}