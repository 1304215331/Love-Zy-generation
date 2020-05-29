const fs = require("fs")
const zlib = require("zlib")

// 创取读取流 
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
console.log('文件压缩完成');