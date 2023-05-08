// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/detailMap')
const $conf = require('../../Config/db.js')
const $utils = require('../../Utils/utils.js')
const mysql = require('mysql')
// const store = useUserStore()
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * getInfo 
     */ 
    
    getInfo :(req, res)=>{
        pool.getConnection((err,connection)=>{
           
            connection.query($sql.getInfo,[req._id],
                (err,result)=>{
                    console.log(result)
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:result[0]
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'暂无数据'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    modifyInfo :(req, res)=>{
        pool.getConnection((err,connection)=>{
           const query = req.body
            connection.query($sql.modifyInfo,[query.gender,query.signature,req._id],
                (err,result)=>{
                    console.log(result)
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:{message:'修改成功'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    getInfoByID :(req, res)=>{
        pool.getConnection((err,connection)=>{
           const query = req.params
           console.log(11,query)
            connection.query($sql.getInfoByID,[query.id],
                (err,result)=>{
                    console.log(result)
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:result[0]
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'暂无数据'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
}