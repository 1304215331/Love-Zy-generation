const http = require("http")

// 搭建服务器
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    // 发送响应数据
    response.end('Hello World');
}).listen(8888)
console.log('创建服务器成功 http://127.0.0.1:8888/');