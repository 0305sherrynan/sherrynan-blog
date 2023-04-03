const userMap = {
    /**
     * map层：mysql语句
     * verifyLoginInfo 验证登录信息
    */
    verifyLoginInfo:'select * from user b where b.email = ? and b.password = ?',
    judgeEmailRegisted:'select * from user where user.email =?',
    registerAccount:'insert into user values(?,?,?,?)'
}
module.exports = userMap