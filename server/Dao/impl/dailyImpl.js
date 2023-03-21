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

     */ 

    getDailyInfo :(req, res)=>{
        pool.getConnection((err,connection)=>{
            // console.log(req)
            // const params = req.query
            connection.query($sql.getDailyInfo,
                (err,result)=>{
                let r = {}
                if (result!=false){
                    // const ulIsShow = result[0].ulIsShow
                    // const token = result[0].token
                    // const username = result[0].username
                    console.log(result)
                    r = {
                        code:true,
                        data:result
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },

}