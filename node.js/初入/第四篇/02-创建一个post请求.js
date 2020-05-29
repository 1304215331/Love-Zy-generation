const http = require("http")
const querystring = require("querystring")
let postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
// 创建服务器
http.createServer((req, res) => {
    let body = ''
    req.on('data', (e) => {
        body += e
    })
    req.on('end', () => {
        // 解析参数
        body = querystring.parse(body)
        // 设置响应头
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.name && body.url){
            res.write("name : " + body.name)
            res.write("<br>")
            res.write("url : " + body.url)
        }else{
            res.write(postHTML)
        }
        console.log('访问了');
        res.end()
    })
}).listen(3000)
console.log('开启城功');