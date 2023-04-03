const jwt = require('jsonwebtoken')
const secretkey = 'howdoyoudo' //密钥
 
module.exports =  class jwtUtil {

    //签名，生成token
    static sign(data){
        return jwt.sign(data,secretkey,{
            expiresIn: 60*60
        })
    }

    static verify(req,res,next){
        const authorization = req.headers.authorization
        // console.log(authorization)
        // next()
        let token = ''
        if (authorization.includes('Bearer')){
            token = authorization.replace('Bearer ','')
        }else  token = authorization
        console.log(token)
        jwt.verify(token,secretkey,(error,data)=>{
            console.log(error,data)
            if (error) {
                // console.log('error')
                if (error.name == 'TokenExpiredError'){
                    res.json({
                        code:200,
                        data:{
                            message:'tokenExpire'
                        }
                    })
                }
                else{
                    res.json({
                        code:200,
                        data:{
                            message:'token错误'
                        }
                    })
                }
                // next()
                // return
            }else{
                //验证通过，将带有身份认证的id（实际为登录的user_id） 赋值给req，
                //则请求时不需要自己携带user_id
                req._id = data._id

                next()
            }
            // next()
        })  
    }
} 