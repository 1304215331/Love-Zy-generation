//1.导包
var fs = require('fs');
var Crawler = require("crawler");
//2.创建爬虫对象
var c = new Crawler({
    encoding: null,
    jQuery: false,// set false to suppress warning message.
    callback: function (err, res, done) {
        if (err) {
            console.error(err.stack);
        } else {
            //爬取成功之后将文件写入路径
            fs.createWriteStream(res.options.filename).write(res.body);
        }

        done();
    }
});

//3.开始爬虫
/*
绝大网站都有反爬虫技术
解决方案：手动模拟浏览器发送请求

*/
c.queue({
    uri: "https://upos-sz-mirrorhw.bilivideo.com/upgcxcode/62/81/182078162/182078162-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1588853023&gen=playurl&os=hwbv&oi=2032280321&trid=4c16fd653ef24aa9a7592318b64090b1h&platform=html5&upsig=8f640ea6008196dd1ea4bebd22a3b38d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=452279507&logo=80000000",//文件网址
    filename: __dirname + '/baidu1.mp4',//文件路径
    headers: { 'User-Agent': 'requests' }//让服务端伪装成客户端
});