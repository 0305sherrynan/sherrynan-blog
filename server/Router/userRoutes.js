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
module.exports = router