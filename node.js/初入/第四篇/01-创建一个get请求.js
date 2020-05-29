const http = require("http")
const url = require("url")

// 服务器代码
let head = (req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'})
    let params = url.parse(req.url, true).query
    res.write(`网站名字 : ${params.name}`)
    res.write("\n")
    res.write(`网站地址 : ${params.url}`)
    res.end()
    console.log('有人访问了我');
}
// 创建服务器
http.createServer(head).listen(8888)

console.log('服务器开启');