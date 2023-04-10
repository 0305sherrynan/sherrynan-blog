const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/commentImpl.js')
const $jwt = require('../Utils/jwt.js')

/**
 * submitCom 提交评论内容
 * getParentCom 获取评论区的父表
 * submitSonCom 提交评论内容 (子表) 
 * getSonComByparentID 获取评论区的子表 by parentID
 */
router.post('/submitCom',$jwt.verify,(req,res)=>{
    $sql.subMitCom(req,res)
})
router.get('/getParentCom',(req,res)=>{
    $sql.getParentCom(req,res)
})
router.post('/submitSonCom',$jwt.verify,(req,res)=>{
    $sql.submitSonCom(req,res)
})
router.get('/getSonCom/:parentid',(req,res)=>{
    $sql.getSonComByparentID(req,res)
})
module.exports = router