const express = require("Express")
const app = express()
app.use('/public', express.static("public"))
app.get("/index.html", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
app.get('/process_get', (req, res) => {
    var response = {
        "name": req.query.name,
        "url": req.query.url
    };
    console.log(response);
    res.send(JSON.stringify(response))
})

let server = app.listen('8083',()=>{
    console.log('被访问了');
    var host = server.address().address
    var port = server.address().port
    console.log("host  " +host) // host  ::
    console.log("port  " +port) // port  8081
})
console.log('服务器开启成功');