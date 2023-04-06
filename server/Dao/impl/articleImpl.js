// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/articleMap')
const $conf = require('../../Config/db.js')
const $utils = require('../../Utils/utils.js')
const mysql = require('mysql')
// const store = useUserStore()
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * getArticleInfo 获取所有的 article 信息
     * submitOneDailyInfo 提交单个daily
     */ 
    
    getArticleInfo :(req, res)=>{
        // const query = req.query
        // console.log(req._id)
        pool.getConnection((err,connection)=>{
            connection.query($sql.getArticleInfo,[req._id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    // console.log(result)
                    r = {
                        code:200,
                        data:result
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'暂无数据，请前往admin添加吧！'
                        }
                    }
                }
                console.log(r)
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    submitOneArticleInfo :(req, res)=>{
        const query = req.body
        pool.getConnection((err,connection)=>{
            connection.query($sql.submitOneArticleInfo,[query.title,query.description,query.info,
                                                        $utils.takeUrlToLocal(query.cover),query.time,query.sort,req._id,query.article_id],
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
    getArticleSortAndNumber :(req, res)=>{
        // const query = req.query
        pool.getConnection((err,connection)=>{
            connection.query($sql.getArticleSortAndNumber,[req._id],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    console.log(result)
                    r = {
                        code:200,
                        data:result
                    }
                }
                else{
                    r = {
                        code:200,
                        data:{
                            message:'暂无数据，请前往admin添加吧！'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    getArticleByArticleid :(req, res)=>{
        const id = req.params.article_id
        pool.getConnection((err,connection)=>{
            connection.query($sql.getArticleByArticleid,[id],
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
                            message:'暂无数据，请前往admin添加吧！'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    getArticleInfoBySort :(req, res)=>{
        const sort = req.params.sortName
        // const id = req.query.user_id
        pool.getConnection((err,connection)=>{
            connection.query($sql.getArticleInfoBySort,[req._id,sort],
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
}