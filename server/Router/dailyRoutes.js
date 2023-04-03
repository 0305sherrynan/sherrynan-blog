const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/dailyImpl.js')
const $jwt = require('../Utils/jwt.js')
/**,
 * @swagger
 * /api/daily:
 *    get:
 *      tags:
 *      - 测试
 *      summary: 获取日常记录的信息
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: user_id
 *        in: query
 *        description: 用户的id
 *        required: true
 *        type: string
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           code:   #返回的code码
 *                               type: integer
 *                               description: 返回code码
 *                           data:
 *                               type: object
 *                               description: 返回数据
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * 
 * */

/**,
 * @swagger
 * /api/daily:
 *    post:
 *      tags:
 *      - 测试
 *      summary: 获取日常记录的信息
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: user_id
 *        in: body
 *        description: 用户的id
 *        required: true
 *        type: string
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           code:   #返回的code码
 *                               type: integer
 *                               description: 返回code码
 *                           data:
 *                               type: object
 *                               description: 返回数据
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * 
 * */

/**
 * 接口发送，包含方式

 */

router.get('',$jwt.verify, (req, res) => {
    // res.send({'zwz':'123'})
    $sql.getDailyInfo(req, res)
})
router.post('', $jwt.verify,(req, res) => {
    $sql.submitOneDailyInfo(req, res)
})



module.exports = router