
// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/userMap')
const $conf = require('../../Config/db.js')
const $utils = require('../../Utils/utils.js')
const mysql = require('mysql')
const $jwt = require('../../Utils/jwt')
// const store = useUserStore()
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * verifyLoginInfo 验证登录信息
     * modifyPasInfo 修改个人密码
     * judgeEmailRegisted 验证是否该账号无人注册
     * registerAccount 注册账号
     *
     */ 

    verifyLoginInfo :(req, res)=>{
        const query = req.body
        pool.getConnection((err,connection)=>{
            // const params = req.query
           
            connection.query($sql.verifyLoginInfo,[query.email,query.password],
                (err,result)=>{
                let r = {}
                
                //以用户id作为token的生成
                
                if (result!=false){
                    const token = $jwt.sign({_id:result[0].user_id})
                  
                    r = {
                        code:200,
                        data:{message:'success',token}
                    }
                    // return
                }
                else {
                    r = {
                        code:200,
                        data:{message:'error',token:''}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    }, 
    judgeEmailRegisted :(req, res)=>{
        const query = req.body
        pool.getConnection((err,connection)=>{
            // const params = req.query
          
            connection.query($sql.judgeEmailRegisted,[query.email],
                (err,result)=>{
                let r = {}
                
                if (result!=false){
                  
                    r = {
                        code:200,
                        data:{message:'error'}
                    }
                    // return
                }
                else {
                    r = {
                        code:200,
                        data:{message:'success'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    registerAccount :(req, res)=>{
        const query = req.body
        pool.getConnection((err,connection)=>{
           
            connection.query($sql.registerAccount,[query.user_id,query.email,query.password,query.nickname,query.coverimg],
                (err,result)=>{
                let r = {}
                
                if (result!=false){
                  
                    r = {
                        code:200,
                        data:{message:'success'}
                    }
                    // return
                }
                else {
                    r = {
                        code:200,
                        data:{message:'error'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    getPersonInfo :(req, res)=>{
        
        pool.getConnection((err,connection)=>{
            // const params = req.query
          
            connection.query($sql.getPersonInfo,[req._id],
                (err,result)=>{
                let r = {}
                console.log('get',result[0])
                if (result!=false){
                  
                    r = {
                        code:200,
                        data:result[0]
                    }
                    // return
                }
                else {
                    r = {
                        code:200,
                        data:{message:'error'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },

    
    modifyPersonInfo :(req, res)=>{
        
        pool.getConnection((err,connection)=>{
            const params = req.body
            
            connection.query($sql.modifyPersonInfo,[params.email,params.password,params.nickname,$utils.takeUrlToLocal(params.coverimg),req._id],
                (err,result)=>{
                let r = {}
         

                if (result!=false){
                  
                    r = {
                        code:200,
                        data:{message:'success'}
                    }
                    // return
                }
                else {
                    r = {
                        code:200,
                        data:{message:'error'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    modifyPasInfo :(req, res)=>{
        
        pool.getConnection((err,connection)=>{
            const params = req.body
          
            connection.query($sql.modifyPasInfo,[params.newPas,req._id],
                (err,result)=>{
                let r = {}
        

                    r = {
                        code:200,
                        data:{message:'成功'}
                    }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
}