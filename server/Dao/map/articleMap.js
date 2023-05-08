const articleMap = {
    /**
     * map层：mysql语句
     * getDailyInfo 获取daily信息
    */
    getArticleInfo:'select * from article where user_id = ?',
    submitOneArticleInfo:'insert into article values(?,?,?,?,?,?,?,?)',
    getArticleSortAndNumber:'select sort sortName,count(*) sortCount from article where user_id = ? group by sort',
    getArticleByArticleid:'select * from article where article_id = ?',
    getArticleInfoBySort:'select * from article where user_id =? and sort = ?'
} 
module.exports = articleMap