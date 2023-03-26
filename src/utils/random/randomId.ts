export const randomId = (count:number):string=>{
    let name:string = Math.random().toString(36).slice(count)
    return name
}