const commentMap = {
    /**
     * map层：mysql语句
     * subMitCom 提交评论
     * getParentCom 获取评论区的父表
    */
    subMitCom:'insert into nofcomment values(?,?,?,?)',
    getParentCom:'select id,info,time,nickname,coverimg from nofcomment,user where  nofcomment.user_id = user.user_id',
    submitSonCom:'insert into soncomment values(?,?,?,?,?,?)',
    getSonComByparentID:'select id,info,time,replyid,coverimg,nickname from user,soncomment where soncomment.parentid = ? and soncomment.user_id = user.user_id',
    getReplyedInfo:'select b.user_id,b.nickname,b.coverimg from (SELECT id,user_id FROM nofcomment UNION SELECT id,user_id FROM soncomment)a,user b where a.id = ? and a.user_id = b.user_id '
} 
module.exports = commentMap