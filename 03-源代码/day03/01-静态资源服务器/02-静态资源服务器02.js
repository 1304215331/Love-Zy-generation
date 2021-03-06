/* 
1.学习目标 ： 了解 静态资源服务器  （静态资源：css文件、图片文件、音视频文件）
    a. html中所有的外部资源路径都会变成网络请求
    b. 一般静态资源（css文件，图片文件，音视频文件）会使用文件拼接方式处理
2.学习路线：
    (1)复习nodejs响应客户端HTML文件
    (2)WEB开发特点 ： 2个特点
*/

//(1)导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

//(2)创建服务器
const server = http.createServer((req,res)=>{
    console.log(req.url);
    
    //1.请求路径：路径一定是以/开头
    // http://127.0.0.1:3000/路径
    if(req.url == '/'){
        //2.处理：读取index.html文件返回
        fs.readFile(path.join(__dirname,'www','index.html'),(err,data)=>{
            if(err){
                throw err;
            }else{
                //3.响应
                res.end(data);
            }
        });
    }else if(req.url.indexOf('/resource') == 0 ){ // 路径以/resource开头
        console.log(path.join(__dirname,'www',req.url));
        
        fs.readFile(path.join(__dirname,'www',req.url),(err,data)=>{
            if(err){
                throw err;
            }else{
                //3.响应
                res.end(data);
            }
        });
    }else{
        res.end('404 not found')
    }

});

//(3)启动服务器
server.listen(3000,()=>{
    console.log('success');
});