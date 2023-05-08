const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/userImpl.js')
const $jwt = require('../Utils/jwt.js')
router.post('/login', (req, res) => {
  
    $sql.verifyLoginInfo(req, res)
})
router.post('/judgeRegisterd',(req,res)=>{
    $sql.judgeEmailRegisted(req, res)
})
router.post('/register',(req,res)=>{
    $sql.registerAccount(req,res)
})
router.get('/getInfo',$jwt.verify,(req,res)=>{
    $sql.getPersonInfo(req,res)
})

router.post('/modifyInfo',$jwt.verify,(req,res)=>{
    $sql.modifyPersonInfo(req,res)
})
router.post('/modifyPas',$jwt.verify,(req,res)=>{
    $sql.modifyPasInfo(req,res)
})


module.exports = router