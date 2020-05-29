const fs = require("fs")
console.log('文件读取中');
fs.open('index.txt', 'a', (err, data) => {
    if (err) {
        return console.error(err)
    }
    console.log('文件读取成功');
    console.log(data.toString()); // 3
})
console.log('判断异步');
/* 文件读取中
   判断异步
   文件读取成功 */
  /*  console.log(fs.readFileSync('index.txt').toString()); */