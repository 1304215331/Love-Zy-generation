// 导入爬虫模块
var fs = require('fs');
var Crawler = require("crawler");
// 创建爬虫对象
var c = new Crawler({
    encoding: null,
    jQuery: false,// set false to suppress warning message.
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            //爬取成功之后将文件写入路径
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        done();
    }
});
// 开始爬虫
c.queue({
    url:'https://upos-sz-mirrorhw.bilivideo.com/upgcxcode/62/81/182078162/182078162-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1588853023&gen=playurl&os=hwbv&oi=2032280321&trid=4c16fd653ef24aa9a7592318b64090b1h&platform=html5&upsig=8f640ea6008196dd1ea4bebd22a3b38d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=452279507&logo=80000000',
    filename:__dirname + '/bilibili.mp4',// 文件路径
    headers: { 'User-Agent': 'requests' }//让服务端伪装成客户端
})