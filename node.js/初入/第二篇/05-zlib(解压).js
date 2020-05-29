const fs = require("fs")
const zlib = require("zlib")

fs.createReadStream("input.txt.gz")
.pipe(zlib.createGunzip('input.txt.gz'))
.pipe(fs.createWriteStream('box.txt'))

console.log('程序写入完成');