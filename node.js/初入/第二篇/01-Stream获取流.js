const fs = require("fs")
let data = ''
// 创建可读流
var readableStream = fs.createReadStream('index.txt')


// 设置编码为utf8
readableStream.setEncoding("UTF8")


// 处理流事件 --> data , end , and  error

readableStream.on('data',(msg)=>{
    data += msg
})

readableStream.on('end',()=>{
    console.log(data);
})

readableStream.on('error',()=>{
    console.log(err.stack);
})

console.log('程序执行完毕');
console.log(data);