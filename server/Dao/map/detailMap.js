const detailMap = {
    /**
     * map层：mysql语句
    */
    getInfo:'select gender,signature from detailinfo where user_id = ?',
    modifyInfo:'update detailinfo set gender = ?,signature = ? where user_id = ?',
    getInfoByID:'select gender,signature from detailinfo where user_id = (select b.user_id from (SELECT id,user_id FROM nofcomment UNION SELECT id,user_id FROM soncomment)a,user b where a.id = ? and a.user_id = b.user_id)'

} 
module.exports = detailMap