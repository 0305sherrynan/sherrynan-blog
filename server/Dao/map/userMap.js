const userMap = {
    /**
     * map层：mysql语句
     * verifyLoginInfo 验证登录信息
    */
    verifyLoginInfo:'select * from user b where b.email = ? and b.password = ?',
    judgeEmailRegisted:'select * from user where user.email =?',
    registerAccount:'insert into user values(?,?,?,?,?)',
    getPersonInfo:'select nickname,email,password,coverimg from user where user_id = ?',
    
    modifyPersonInfo:'update user  set email = ?,password = ?,nickname = ?,coverimg = ? where user_id = ?',
    modifyPasInfo:'update user set password = ? where user_id = ?'
}
module.exports = userMap