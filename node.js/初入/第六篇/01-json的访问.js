const fs = require('fs')
const express = require('express')
const app = express()
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
app.get('/visit',(req,res)=>{
    fs.readFile(`${__dirname}/index.json`,'utf8',(err,data)=>{
       console.log(data);
        res.end(data)
    })
})
app.get('/addUser',(req,res)=>{
    fs.readFile(`${__dirname}/index.json`,'utf8',(err,data)=>{
        /* 吧json对象转成js对象  然后可以利用js的方法赋值了 在转json对象 */
        data = JSON.parse(data)
        data.user4 = user.user4
        console.log(data);
        res.end( JSON.stringify(data))
    })
})
app.listen(8088)
console.log('服务器开启成功');