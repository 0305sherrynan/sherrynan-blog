const http = require("http");
const fs = require('fs')
let utils = {
    //连接池的内容拼接
    extends:function(target, source, flag) {
        for(let key in source) {
          // eslint-disable-next-line no-prototype-builtins
          if(source.hasOwnProperty(key))
            flag ?
              (target[key] = source[key]) :
              (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
      },
      //返回简单信息的封装
      jsonWrite:  function(res, ret) {
        if(typeof ret === 'undefined'){
          res.json({
            result : {
              code : false,
              msg : '操作失败'
            }
          });
        }else{
          res.json({
            result : ret
          });
        }
      },
      closeConnection:function(res,result,connection){
            //返回结果
            this.jsonWrite(res,result)
             //释放连接
            connection.release()
      },
      //将图片存入本地
      takeUrlToLocal:function(url){
        // console.log(url)
        // var reader  = new FileReader();
        if (url) {
          //reader转为base64
          // reader.readAsDataURL(url);
          
          let dataBuffer = Buffer.from(url, 'base64')
          let name = url.substr(0,5).replace(/\//g,'')
          //写入到该目录上一级assets文件夹中名字叫image+'png
          fs.writeFile('src/assets/icon/'+name+'.png', dataBuffer, function(err) {
              if (err) console.log(err)
          })
          let nameAll = name+'.png'
          return nameAll
      }
}
}
module.exports = utils