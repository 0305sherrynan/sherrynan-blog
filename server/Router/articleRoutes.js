const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/articleImpl.js')
const $jwt = require('../Utils/jwt.js')
router.get('',$jwt.verify,(req, res) => {
    // res.send({'zwz':'123'})
    $sql.getArticleInfo(req, res)
})
router.post('',$jwt.verify, (req, res) => {
    $sql.submitOneArticleInfo(req, res)
})
router.get('/sort',$jwt.verify,(req,res)=>{
    $sql.getArticleSortAndNumber(req, res)
})
router.get('/:article_id', (req, res) => {
    // res.send({'zwz':'123'})
    $sql.getArticleByArticleid(req, res)
})
router.get('/sort/:sortName',$jwt.verify, (req, res) => {
    // res.send({'zwz':'123'})
    $sql.getArticleInfoBySort(req, res)
})


module.exports = router