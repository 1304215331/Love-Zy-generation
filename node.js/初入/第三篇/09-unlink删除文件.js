const fs = require("fs")
console.log('开始删除文件');
fs.unlink('input.txt',(err)=>{
    if(err){
        return console.error(err)
    }
    console.log('删除成功')
})