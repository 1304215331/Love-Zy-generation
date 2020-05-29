//1.导入模块
var Crawler = require("crawler");
//2.创建爬虫对象
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            //爬取完毕之后会执行这个回调
            //将爬取到的网页数据赋值给jquery的$对象  （可以使用jq的语法来操作页面DOM）
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            //console.log($("body").html());

            console.log($('#lg>img').eq(0).attr('src'));
        }
        done();
    }
});

//3.开始爬虫
// Queue just one URL, with default callback
/*
1.绝大部分网站都有反爬虫机制
*/
c.queue('http://www.baidu.com/');