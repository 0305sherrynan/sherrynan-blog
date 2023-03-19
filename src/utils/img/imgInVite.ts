export const returnImg = (item:string)=>{
    return new URL(`/src/assets/img/${item}`, import.meta.url).href
}