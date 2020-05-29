/* 
    1.学习目标：nodejs接收get与post参数
    2.学习路线
        (1)get请求参数
            a. 前端发送 ： 直接在url后面拼接   url?key=value&key1=value1
            b. 服务器接收 ： 字符串切割  （使用url模块的parse方法切割）
        (2)post请求参数
            a. 前端发送 ： (1)设置请求头 application/x-www-form-urlencode (2)在send里面发送：请求体
            b. 服务端接收
                (1)给req注册data事件 ： 拼接数据流
                (2)给req注册end事件 ： 获取最终post参数
                (3)使用querystring模块解析参数
        (3)get与post区别
            a.位置不同  ： get在url拼接，post在请求体中
            b.大小不同  :  get只能传输小数据（1MB左右） post没有限制
                文件传输一律是post
            c.安全性不同： get安全性低， post安全性高
                登录注册一律是post
            d.速度不同 : get速度比post高
*/

//1.导入模块
const http = require('http');
const url = require('url');//解析get参数
const querystring = require('querystring');//解析get参数

//2.创建服务器
let server = http.createServer((req,res)=>{
   
    console.log(req.url);
    /*post请求特点 
    a. post参数不是在url中，而是在请求体中
    b. post参数无法一次性发送，而是多次
    */
   let postData = '';
    //(1)给req注册data事件  （这个事件执行多次：取决于数据大小和你的网速）
    req.on('data',(chunk)=>{
        postData += chunk;
    });

    //(2)给req注册end事件 ： 所有的数据流全部发送完毕会执行
    req.on('end',()=>{
        console.log(postData);
        //(3)使用querystring模块解析post参数
        let postObj =  querystring.parse(postData);
        console.log(postObj);

        //解析好的参数响应给客户端
        res.end(JSON.stringify(postObj));
        
        
    })

});
//3.开启服务器
server.listen(3000,()=>{
    console.log('success');
});