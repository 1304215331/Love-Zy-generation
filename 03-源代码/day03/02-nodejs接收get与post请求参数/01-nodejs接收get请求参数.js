/* 
    1.学习目标：nodejs接收get与post参数
    2.学习路线
        (1)get请求参数
            a. 前端发送 ： 直接在url后面拼接   url?key=value&key1=value1
            b. 服务器接收 ： 字符串切割  （使用url模块的parse方法切割）
        (2)post请求参数
        (3)get与post区别
*/

//1.导入模块
const http = require('http');

const url = require('url');//解析get请求

//2.创建服务器
let server = http.createServer((req,res)=>{
    //如果url有中文，浏览器会转成URI编码发送
    console.log(decodeURI(req.url));
    
    /* Nodejs接收get请求参数 ： 使用字符串切割  */
    console.log(req.url);

    //第一个参数：要解析的url  第二个参数: 默认为false   true:query是一个对象
    let urlObjc =  url.parse(req.url,true); 
    console.log(urlObjc);

    var getObj = urlObjc.query;
    /* 细节：nodejs不能直接响应返回js对象，需要转成JSON字符串返回 */
    res.end(JSON.stringify(getObj));
    
    
});
//3.开启服务器
server.listen(3000,()=>{
    console.log('success');
});