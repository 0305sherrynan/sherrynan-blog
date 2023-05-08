const fansMap = {
    /**
     * map层：mysql语句
     * getDailyInfo 获取daily信息
     * getFocus
    */
    postFocusUser:'insert into fans values(?,?)',
    focusVerify:'select * from fans where positive = ? and negative = ?',
    getFocus:'select negative from fans where positive = ?',
    cancelFocus:'delete from fans where positive = ? and negative = ?',
    getFocusInfo:'select a.user_id user_id, email, nickname, coverimg,  gender, signature from user a left join detailinfo b on a.user_id = b.user_id where  a.user_id = ?'
} 
module.exports = fansMap