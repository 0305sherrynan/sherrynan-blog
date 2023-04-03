//创建基本的web服务器
const express = require('express')
const app = express()

var bodyParser = require('body-parser');//用于req.body获取值的
// app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true}));
//设置upload 
app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));

// 使用swagger API 文档
var swaggerInstall = require('./Utils/swagger.js')
swaggerInstall(app)

//引入course.js等接口
const daily = require('./Router/dailyRoutes')
const article = require('./Router/articleRoutes')
const user = require('./Router/userRoutes.js')

//使用接口
app.use('/api/daily',daily)
app.use('/api/article',article)
app.use('/api/user',user)

app.get('/zwz',(req,res)=>{
    res.send('当前服务器已连接')
})

// var path = require('path');

//监听接口
app.listen(3000,function(){
    console.log('Sherry_Blog_Server Ready')
})

