const express = require("Express")
const app = express()
const bodyParser = require("body-parser")
app.use('/public',express.static('public'))
// 创建post编码解析
let urlBodyParser = bodyParser.urlencoded({extended:false})
app.get("/post.html",(req,res)=>{
    res.sendFile(`${__dirname}/post.html`)
})
app.post('/study',urlBodyParser,(req,res)=>{
    let obj = {
        ursename:req.body.ursename,
        password:req.body.password
    }
    res.send(JSON.stringify(obj))
    console.log('post服务器被访问');
})
let server = app.listen('8084',()=>{
    console.log('被访问了');
    var host = server.address().address
    var port = server.address().port
    console.log("host  " +host) // host  ::
    console.log("port  " +port) // port  8081
})
console.log('服务器开启');