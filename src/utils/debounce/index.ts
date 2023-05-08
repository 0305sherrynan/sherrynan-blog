export const debounce = (wait:number,func:Function,callFunc ?: Function) => {
    let timer:number
    return (...args:any[])=>{
        
        if (timer) {
            clearTimeout(timer)
        }
        new Promise((resolve,reject)=>{
            timer = setTimeout(()=>{
                func(...args)
                resolve(1)
            },wait)
        }).then((resolve)=>{
            if (callFunc) callFunc()
        })
    }
}