const express = require("Express")
let app = express()
app.use('/public',express.static('public'))
app.get('/',(req,res)=>{
    res.send('Hello Word')
})
let server = app.listen('8082',()=>{
    var host = server.address().address
    var port = server.address().port
    console.log("host  " +host) // host  ::
    console.log("port  " +port) // port  8081
})
console.log('服务器开启成功');