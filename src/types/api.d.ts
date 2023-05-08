export interface getRequestResponse<T> {
    code: number,
    data: Array<T>
}
//post 请求daily数据返回的数据格式
export interface postRequestResponse<T> {
    code: number,
    data: T
}

export namespace dailyApi {
}

export namespace articleApi {
     
}
export namespace userApi{
}
export namespace commentApi{
    interface getSonComentByid{
        id:string
        coverimg:string
        nickname:string
        info:string
        time:string
        replyid:string
    }
    interface getReplyedInfo_reqParams{
        replyid:string
    }
    interface getReplyedInfo_resParams{
        user_id:string
        nickname:string
        coverimg:string
        
    }
}
export namespace detailApi {
}
export namespace fansApi{
    //获取当前用户的关注信息
    interface getCurrentUserFocus{
        negative:string
    }
    interface singleFocusInfo{
        coverimg:string
        user_id:string
        nickname:string
        gender:string
        signature:string
        email:string
    }
}