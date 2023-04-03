
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
     *
     */ 

    verifyLoginInfo :(req, res)=>{
        const query = req.body
        pool.getConnection((err,connection)=>{
            // const params = req.query
            console.log(query)
            connection.query($sql.verifyLoginInfo,[query.email,query.password],
                (err,result)=>{
                let r = {}
                console.log(result)
                //以用户id作为token的生成
                
                if (result!=false){
                    const token = $jwt.sign({_id:result[0].user_id})
                    // console.log($jwt.sign(result[0].user_id))
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
            console.log(query)
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
            // const params = req.query
            console.log(query)
            connection.query($sql.registerAccount,[query.user_id,query.email,query.password,query.nickname],
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
}