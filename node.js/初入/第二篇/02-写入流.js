const fs = require("fs")
let data = "我是一个写入流的一个数据,哈哈哈哈哈,1111"


// 创建一个写入流,写入文件
let writerStream = fs.createWriteStream('index.txt')

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8')

// 标记文本末尾
writerStream.end()

// 处理流事件 --> data , end , and error

writerStream.on('finish',()=>{
    console.log('写入完成');
})

writerStream.on('error',(err)=>{
    console.log(err.stack);
})

console.log('程序执行完成');


