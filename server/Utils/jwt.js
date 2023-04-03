const jwt = require('jsonwebtoken')
const secretkey = 'howdoyoudo' //密钥
 
module.exports =  class jwtUtil {

    //签名，生成token
    static sign(data){
        return jwt.sign(data,secretkey,{
            expiresIn: 20
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
                // console.log('error')
                req._id = data._id
                // res.json({
                //     code:200,
                //     data:{
                //         message:'token正确'
                //     }
                // })
                next()
            }
            // next()
        })  
    }
} 