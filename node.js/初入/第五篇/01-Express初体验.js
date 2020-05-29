// 导入Express框架
const express = require("Express")
let app = express()

// 创建服务器
app.get("/",(req,res)=>{
    res.send('Hello Word')
})

let server = app.listen(8081,()=>{
    var host = server.address().address
    var port = server.address().port
    console.log("host  " +host) // host  ::
    console.log("port  " +port) // port  8081
})