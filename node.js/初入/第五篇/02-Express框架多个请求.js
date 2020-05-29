const express = require("Express")
const app = express()

// 创建get首页请求
app.get("/",(req,res)=>{
    console.log('主页 GET请求');
    res.send("欢迎来到首页")
})
app.post("/",(req,res)=>{
    console.log('主页 POST请求');
    res.send("hello Word")
})
app.get("/delete",(req,res)=>{
    console.log('访问了delete');
    res.send("这是删除页,需要删除什么东西勒")
})
app.get("/list",(req,res)=>{
    console.log('访问了list');
    res.send("这是list")
})
// 正则匹配
app.get('/a*b',(req,res)=>{
    console.log('正则匹配被访问');
    res.send('这是正则匹配')
})
let server =  app.listen('8082',()=>{
    var host = server.address().address
    var port = server.address().port
    console.log("host  " +host) // host  ::
    console.log("port  " +port) // port  8081
})
console.log('服务器开启成功');