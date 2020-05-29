const fs = require('fs')
console.log('开始读取文件');
fs.stat('index.txt',(err,res)=>{
    if(err){
        return console.error(err)
    }
    console.log(res);
    console.log('判断这是否为文件'+res.isFile());
    console.log('判断是否为路径'+res.isDirectory());
})
console.log('读取完毕');