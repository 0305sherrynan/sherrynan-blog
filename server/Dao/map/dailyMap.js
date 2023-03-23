const dailyMap = {
    /**
     * map层：mysql语句
     * getDailyInfo 获取daily信息
    */
    getDailyInfo:'select * from daily where user_id = ?',
    submitOneDailyInfo:"insert into daily values(?,?,?)"

} 
module.exports = dailyMap