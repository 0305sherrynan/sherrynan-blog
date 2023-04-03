const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/userImpl.js')
const $jwt = require('../Utils/jwt.js')
router.post('/login', (req, res) => {
    // res.send({'zwz':'123'})
    $sql.verifyLoginInfo(req, res)
})
router.get('/',$jwt.verify,(req,res,next)=>{
    res.json({
        code:200,
        data:{
            message:'token正确'
        }
    })
})
module.exports = router