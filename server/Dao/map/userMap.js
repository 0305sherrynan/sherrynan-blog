const userMap = {
    /**
     * map层：mysql语句
     * getDailyInfo 获取daily信息
    */
    verifyLoginInfo:'select * from user b where b.email = ? and b.password = ?',
}
module.exports = userMap