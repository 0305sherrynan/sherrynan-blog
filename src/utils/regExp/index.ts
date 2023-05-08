const checkByRegExpCurry = (reg:RegExp) => {
    return function(str:string){
        return reg.test(str)
    }
}

export const checkEmail = checkByRegExpCurry(/^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/)
export const checkPhone = checkByRegExpCurry(/^1\d{10}$/)