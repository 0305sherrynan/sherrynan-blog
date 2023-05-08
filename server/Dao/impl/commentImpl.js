// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/commentMap')
const $conf = require('../../Config/db.js')
const $utils = require('../../Utils/utils.js')
const mysql = require('mysql')
const $emoji = require('../../Utils/emoji')
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * subMitCom 提交评论
     * getParentCom 获取评论区的父表
     * getSonComByparentID 获取评论区的子表 by parentID
     */ 

    subMitCom :(req, res)=>{
        const query = req.body
        // console.log(query)
        pool.getConnection((err,connection)=>{
            // const params = req.query
            query.info = $emoji.encodeEmoji(query.info)
            console.log(query)
            connection.query($sql.subMitCom,[query.id,query.info,req._id,query.time],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:{
                            message:'提交成功！'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    getParentCom :(req, res)=>{

        pool.getConnection((err,connection)=>{
            connection.query($sql.getParentCom,
                (err,result)=>{
                let r = {}
                if (result!=false){
                    console.log(result)
                    for (let key in result){
                        result[key].info = $emoji.deCodeEmoji(result[key].info)
                    }
                    r = {
                        code:200,
                        data:result
                        
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    submitSonCom :(req, res)=>{
        let query = req.body
        console.log(query)
        query.info = $emoji.encodeEmoji(query.info)
        pool.getConnection((err,connection)=>{
            connection.query($sql.submitSonCom,[query.id,query.info,req._id,query.time,query.parentid,query.replyid],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:{
                            message:'提交成功'
                        }
                        
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    getSonComByparentID :(req, res)=>{
        let query = req.params
        console.log(query)
        pool.getConnection((err,connection)=>{
            connection.query($sql.getSonComByparentID,[query.parentid],
                (err,result)=>{
                let r = {}
                if (result!=undefined){
                    for (let key in result){
                        result[key].info = $emoji.deCodeEmoji(result[key].info)
                    }
                    r = {
                        code:200,
                        data:result
                        
                    }
                }
                else{
                    r={
                        code:200,
                        data:{message:'无子表数据'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    getReplyedInfo :(req, res)=>{
        let query = req.params
        console.log(query)
        pool.getConnection((err,connection)=>{
            connection.query($sql.getReplyedInfo,[query.replyid],
                (err,result)=>{
                let r = {}
                console.log('123',result)
                if (result!=undefined){
                    r = {
                        code:200,
                        data:result[0]
                        
                    }
                }
                else{
                    r={
                        code:200,
                        data:{message:'无子表数据'}
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
}