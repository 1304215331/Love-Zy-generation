// 导入的模板
const express = require("express")
const app = express()
const router = express.Router()
// 导入的文件
const login = require("./routers/login/index.js")
const register = require("./routers/register/index")
// 解决post请求的一些问题
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/* 解决跨域 */
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})
// 创建接口
app.post("/login",login)
app.post("/register",register)
app.listen('8008')
console.log('服务器开启');