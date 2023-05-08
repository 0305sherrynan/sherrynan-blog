const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/detailImpl.js')
const $jwt = require('../Utils/jwt.js')

/**
 * getInfo 获取当前用户的信息
 * &:id 指定id的用户信息
 * modifyInfo 修改信息
 */
router.get('/getInfo',$jwt.verify,(req,res)=>{
    $sql.getInfo(req,res)
})
router.get('/getInfo/:id',(req,res)=>{
    $sql.getInfoByID(req,res)
})
router.post('/modifyInfo',$jwt.verify,(req,res)=>{
    $sql.modifyInfo(req,res)
})

module.exports = router