const fs = require("fs") // 导入模块 fs

let data = fs.readFileSync('input.txt'); // 导入文本  input.txt文件
console.log(data.toString()); // 转字符串
console.log('启动成功');