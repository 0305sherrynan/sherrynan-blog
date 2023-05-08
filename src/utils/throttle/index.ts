export const throttle = (wait:number,func:Function,callFunc ?: Function):Function=> {
    let timer:number | null
    return (...args:any[])=>{
        if (timer) {
            return
        }
        new Promise((resolve,reject)=>{
            timer = setTimeout(() => {
                timer = null
                func(...args)
                resolve(1)
            }, wait)
        }).then((resolve)=>{
          if (callFunc) callFunc()      
        })
    }
}