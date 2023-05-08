//以data下是否有message元素作为判断标准是否为有数据 返回true ：为有数据 
export const DataTypeJudge = (data:unknown):data is {message:string} =>{
    return (data as {message:string}).message == undefined
}
// export const DataTypeJudgeGenel = <T>(data:unknown,leixing:T):boolean =>{
//     type key = keyof T
//     return (data as T)[key] == undefined
// }

export const DataTypeJudgeParentID = (data:unknown):data is {parentid:string} =>{
    return (data as {parentid:string}).parentid == undefined 
}

export const DataTypeJudgeReplyid = (data:unknown):data is {replyid:string} =>{
    return (data as {replyid:string}).replyid == undefined || (data as {replyid:string}).replyid == ''
}