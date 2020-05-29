const fs = require("fs")
// 这是异步代码  
fs.readFile("input.txt",(err,data)=>{
    if(err){
        return console.log(err.stack); // 打印错误
    }
    console.log(data.toString());
})
console.log('程序执行结束');
/* 执行顺序为
   先会打印同步代码  console.log('程序执行结束');
   然后执行fs.readFile()里面的代码
*/