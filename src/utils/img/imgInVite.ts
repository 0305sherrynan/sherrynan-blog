export const returnImg = (item:string)=>{
    return new URL(`/src/assets/img/${item}`, import.meta.url).href
}
export const returnIcon = (item:string)=>{
    return new URL(`/src/assets/icon/${item}`, import.meta.url).href
}
export const returnDBImg = (item:string)=>{
    return new URL(`/src/assets/db/${item}`, import.meta.url).href
}
export const returngifImg = (item:string)=>{
    return new URL(`/src/assets/gif/${item}`, import.meta.url).href
}