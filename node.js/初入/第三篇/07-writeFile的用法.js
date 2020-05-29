const fs = require('fs')
console.log('开始写入文件');
let data = '我是用writeFile写入的数据'
fs.writeFile('index.txt',data,(err)=>{
    if(err){
        console.log(err);
    }
    fs.readFile('index.txt',(err,res)=>{
        if(err){
            return console.error(err)
        }
        console.log(res.toString());
    })
})
console.log('写入完毕');