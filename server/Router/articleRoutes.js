const express = require('express')
const router = express.Router()
const $sql = require('../Dao/impl/articleImpl.js')

router.get('', (req, res) => {
    // res.send({'zwz':'123'})
    $sql.getArticleInfo(req, res)
})
router.post('', (req, res) => {
    $sql.submitOneArticleInfo(req, res)
})
router.get('/sort',(req,res)=>{
    $sql.getArticleSortAndNumber(req, res)
})
router.get('/:article_id', (req, res) => {
    // res.send({'zwz':'123'})
    $sql.getArticleByArticleid(req, res)
})


module.exports = router