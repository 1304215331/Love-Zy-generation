const fs = require("fs")
fs.open('index.txt','r+',(req,res)=>{
    if(req){
        console.log(req.stack);
    }
    console.log('文件读取成功');
})
console.log('运行成功');
fs.stat('index.txt',(req,res)=>{
    console.log(res.isFile());
})