export const returnImg = (item:string)=>{
    return new URL(`/src/assets/img/${item}`, import.meta.url).href
}
export const returnIcon = (item:string)=>{
    return new URL(`/src/assets/icon/${item}`, import.meta.url).href
}