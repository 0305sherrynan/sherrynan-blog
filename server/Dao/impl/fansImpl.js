// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/fansMap')
const $conf = require('../../Config/db.js')
const $utils = require('../../Utils/utils.js')
const mysql = require('mysql')
// const store = useUserStore()
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * postFocusUser 关注用户
     * focusVerify 验证是否已关注
     */ 
    
    postFocusUser :(req, res)=>{
        const query = req.body
        // console.log(query.id)
        pool.getConnection((err,connection)=>{
            connection.query($sql.postFocusUser,[req._id,query.id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    // console.log(result)
                    r = {
                        code:200,
                        data:{
                            message:'关注成功'
                        }
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'关注失败'
                        }
                    }
                }
                console.log(r)
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    focusVerify :(req, res)=>{
        const query = req.body
        console.log(query.id)
        pool.getConnection((err,connection)=>{
            connection.query($sql.focusVerify,[req._id,query.id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                   
                    r = {
                        code:200,
                        data:{
                            message:'已经关注'
                        }
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'未关注'
                        }
                    }
                }
                console.log(r)
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    getFocus :(req, res)=>{
        
        
        pool.getConnection((err,connection)=>{
            connection.query($sql.getFocus,[req._id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                   
                    r = {
                        code:200,
                        data:result
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'你还未关注任何人'
                        }
                    }
                }
                console.log(r)
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    getFocusDetail :(req, res)=>{
        
        pool.getConnection((err,connection)=>{
            const params = req.params

            connection.query($sql.getFocusInfo,[params.id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                  
                    r = {
                        code:200,
                        data:result[0]
                    }
                    // return
                }

                $utils.closeConnection(res,r,connection)

            })
        })
    },
    cancelFocus :(req, res)=>{
        
        pool.getConnection((err,connection)=>{
            const params = req.body
    
            connection.query($sql.cancelFocus,[req._id,params.id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                  
                    r = {
                        code:200,
                        data:{message:'取消关注成功'}
                    }
                    // return
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'取消关注失败'
                        }
                    }
                }

                $utils.closeConnection(res,r,connection)

            })
        })
    },
}