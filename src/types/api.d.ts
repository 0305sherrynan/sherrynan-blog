export namespace dailyApi {
    //get 请求daily数据返回的数据格式
    interface getRequestResponse<T> {
        code: number,
        data: Array<T>
    }
    //post 请求daily数据返回的数据格式
    interface postRequestResponse<T> {
        code: number,
        data: T
    }
}




export namespace articleApi {
     
    interface getRequestResponse<T> {
        code: number,
        data: Array<T>
    }
    //post 请求daily数据返回的数据格式
    interface postRequestResponse<T> {
        code: number,
        data: T
    }
}