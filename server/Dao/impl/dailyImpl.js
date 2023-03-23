// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/dailyMap')
const $conf = require('../../Config/db.js')
const $utils = require('../../Utils/utils.js')
const mysql = require('mysql')
// const store = useUserStore()
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * getDailyInfo 获取所有的daily信息
     * submitOneDailyInfo 提交单个daily
     */ 

    getDailyInfo :(req, res)=>{
        const query = req.query
        pool.getConnection((err,connection)=>{
            // const params = req.query
            connection.query($sql.getDailyInfo,[query.user_id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:result
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    submitOneDailyInfo:(req, res)=>{
        const query = req.body
        pool.getConnection((err,connection)=>{
            // const params = req.query
            connection.query($sql.submitOneDailyInfo,[query.description,query.user_id,query.submittime],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:{message:'提交成功'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
}