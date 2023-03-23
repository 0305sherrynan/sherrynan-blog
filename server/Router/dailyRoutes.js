const express = require('express')
const  router = express.Router()
const $sql = require('../Dao/impl/dailyImpl.js')

/**,
 * @swagger
 * /api/daily:
 *    get:
 *      tags:
 *      - 测试
 *      summary: 获取日常记录的信息
 *      produces:
 *      - application/json
 *      
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */

/**
 * 接口发送，包含方式

 */

router.get('',(req,res)=>{
    // res.send({'zwz':'123'})
    $sql.getDailyInfo(req,res)
})
router.post('',(req,res)=>{
    $sql.submitOneDailyInfo(req,res)
})



module.exports = router