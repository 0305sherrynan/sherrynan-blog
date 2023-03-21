import { requestInstance } from "@/libs/axios";
export const  getDailyInfo = ()=>{
    return requestInstance.get("zwz/api/daily")
}