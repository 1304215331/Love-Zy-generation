const fs = require("fs")

// 创建读取流
let readableStream = fs.createReadStream('index.txt')
// 创建写入流
let writerStream = fs.createWriteStream('input.txt')

readableStream.pipe(writerStream)

console.log('程序执行完毕');