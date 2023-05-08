const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/fansImpl.js')
const $jwt = require('../Utils/jwt.js')
/**
 *  postFocusUser 增加关注
 * focusVerify 是否已关注
 * getFocus 获取关注列表的id
 * getFocusDetail 获取指定关注对象的细节信息
 * cancelFocus 取消对某用户的关注
 */
router.post('/focus',$jwt.verify,(req,res)=>{
    $sql.postFocusUser(req,res)
})
router.post('/focus/verify',$jwt.verify,(req,res)=>{
    $sql.focusVerify(req,res)
})
router.get('/focus',$jwt.verify,(req,res)=>{
    $sql.getFocus(req,res)
})
router.get('/focus/:id',(req,res)=>{
    $sql.getFocusDetail(req,res)
})
router.post('/focus/cancel',$jwt.verify,(req,res)=>{
    $sql.cancelFocus(req,res)
})
module.exports = router