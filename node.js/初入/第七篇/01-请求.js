const express = require('express')
const app = express()
const son = require('./son')
const bodyParser = require("body-parser")
// 解析字典类型的数据
app.use(express.json()); //4.16新增的中间件
// 解析字符串格式的数据
app.use(express.urlencoded({
    extended: false
})); //4.16新增的中间件
/* 解决跨域 */
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //的允许所有域名的端口请求（跨域解决）
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})
/* 获取数据 */
app.get('/examine', son.setDatas)
/* 增加数据 */
app.get('/addDate', son.addDatas)
/* 删除数据 */
app.get('/deletes', son.deleteDatas)
/* 根据id查询数据 */
app.post('/set_one_data', son.setOneData)
app.post('/set_data', son.setDataPost)
app.listen('8081')
console.log('服务器开启成功');