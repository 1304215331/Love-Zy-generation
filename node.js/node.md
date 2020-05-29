## 语法 require     导入模块

-------------  http模块
### const http = require("http")  // 导入http
### http模块的内置方法
#### http.createServer((request, response)=>{}).listen(8888)创建一个服务器  request:失败  response:成功
##### response.writeHead(200, {'Content-Type': 'text/plain';charset="utf-8"}) // 200 返回状态码 返回utf-8格式 文字不会乱码  {内容类型:路径}
##### response.end("hello Word")  // 发送响应数据
##### listen(8888) // 绑定终端 8888  在http.createServer的原型中点出来的

-------------   fs模块
### const fs = require("fs") // 导入fs 阻塞的方法 
#### 阻塞的方法
##### fs.readFileSync()  // fs提供的导入文本方法 参数为路径 同步读取
#### 非阻塞的方法
##### fs.readFile('input.text',(err,data)=>{}) // 第一个参数为需要导入文本的路径  第二个回调函数  err.stack 响应错误  data 返回导入文本的内容  异步读取
#### 判断文件类型
##### fs.stat(path,fn) path:路径  fn:回调  stats 
<script>
stats.isFile() // 	如果是文件返回 true，否则返回 false。
stats.isDirectory() // 如果是目录返回 true，否则返回 false。
</script>
#### fs.writeFile(path,data,fn) 异步写入文件
#### fs.ftruncate(fd,length,fn)   截取文件
#### fs.close(fd,fn) 关闭文件
#### fs.unlink(path,fn)  删除文件

-------------   events模块
### const events = require("events") // 导入events模块
#### events === events.EventEmitter // true  EventEmitter是events的一个构造函数  
#### const eventEmitter = new events.EventEmitter() // 创建一个实例对象   
#### eventEmitter.on("text",()=>{ console.log('嗨咯,我是text');})  // 注册事件,第一个参数为定义的事件名  第二个为自调用函数,做逻辑处理
####  eventEmitter.emit("text") // 打印定义的text // 嗨咯,我是text
##### eventEmitter的方法
<script tpye="javascript">
/* event:事件名(字符串)   listener:回调函数*/
    eventEmitter.on(event,listener ) // 注册监听器 
    eventEmitter.once(event, listener) // 注册监听器 但只会执行一次  触发后立刻解除该监听器
    eventEmitter.removeListener(event, listener) // 移除某个监听器
    eventEmitter.removeAllListeners([event])//移除所以事件的所有监听器
    eventEmitter.setMaxListeners(n) // 默认监听器超过10个就会警告  这是用于提高监听器的默认限制的数量。
    eventEmitter.emit(event, [arg1], [arg2], [...]) // 按监听器的顺序执行执行每个监听器
</script>
--------------  Buffer模块
### const buf = Buffer.from('jackLove', 'ascii') // 第一个参数是自定义的 为需要转换的字符
<script tpye="javascript">
console.log(buf.toString("base64")) // amFja0xvdmU= (base64格式)
console.log(buf.toString("utf8"))  // jackLove
console.log(buf.toString("ascii")) // jackLove
console.log(buf.toString("utf16le")) // 慪正潌敶
console.log(buf.toString("ucs2")) // 慪正潌敶 utf16le的别名
console.log(buf.toString("hex")); // 6a61636b4c6f7665 (将每个字节编码为两个十六进制字符)
console.log(buf.toString("latin1")); // jackLove
console.log(buf.toString("binary")); // latin1的别名
</script>

--------------- Stream 流
---------------------------  读取流
### var readableStream = fs.createReadStream('index.txt') // 可读流  参数为路径
#### readableStream.setEncoding("UTF8") // 编码格式
#### 处理事件流  --> data , end , and  error
#### readableStream.on('data',(msg)=>{data += msg})
#### readableStream.on('end',()=>{console.log(data);})
#### readableStream.on('error',()=>{console.log(err.stack);})
---------------------------  写入流
###  let writerStream = fs.createWriteStream('index.txt') // 可取流 参数需要写进的路径 如果路径没有文件  会新建一个文件
#### let data = '写入的内容'  // 需要写的内容
#### writerStream.write(data,'UTF8')  // 使用UTF8格式写入
#### writerStream.end()  // 标记文本末尾
#### 处理流事件  --> data , end , and  error
#### writerStream.on('finish',()=>{console.log('写入完成');}) //成功
#### writerStream.on('error',(err)=>{console.log(err.stack);})//失败
----------------------------  管道流
### 管道流原理就是读取一个文件(读取流)然后写入另一个文件(写入流)使用pipe关键字  下面案列
#### let readableStream = fs.createReadStream('index.txt') // 读取流
#### let writerStream = fs.createWriteStream('input.txt') // 写入流
#### readableStream.pipe(writerStream) // 完成 input.txt的内容变成了index.txt的内容
----------------------------  链式流(压缩和解压)
### const zlib = require("zlib") //导入压缩模板
#### fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz')); // 读取文件然后写入压缩文件
#### zlib.createGzip() // 压缩  zlib.createGunzip() // 解压



---------------------------  全局变量
#### __filename //返回当前文件的路径
#### __dirname // 返回当前文件的上级路径




// cat 路径 读取某个文件 

## Express框架
###  安装 npm install express --save   npm install body-parser --save  npm install cookie-parser --save  npm install multer --save
#### 检查 npm list express
### const express = require("Express")  let app = express() // 导入Express框架
#### app.get(path,fn(req.res))  // 创建get请求
#### app.post(path,urlBodyParser,fn(req.res))  // 创建post请求
##### res.send(txet) // 返回数据
##### req.query 获取URL的查询参数串 get
##### req.body // post
#### let server = app.listen(http,fn) //  server.address().address 请求头  server.address().port 端口号
### const bodyParser = require("body-parser") // 解析post请求
#### let urlBodyParser = bodyParser.urlencoded({extended:false})

---------------------- 连接数据库(mysql)
### npm install mysql // 下载mysql
### const mysql =  require('mysql') // 导入mysql
#### let sql =  mysql.createConnection({}) // 连接数据库
<script>
    host // 主机地址 默认localhost
    user // 用户名
    password // 密码
    port // 端口号 默认3306
    database // 数据库名
</script>
#### sql.connect()  // 连接数据库
-------------- 查
#### let msg =  'SELECT * FROM websites' // websites 表名字 查
#### sql.query(msg,(err,res)=>{}) 
##### err.message // 错误
##### res // 数据库数据
#### sql.end()  // 结束
-------------- 增
#### let msg =  'INSERT INTO websites(id,url...) VALUES(0,?,?,?,?)'
#### let add =  [对应的数据]  // 增 
#### sql.query(msg,add,(err,res)=>{})
-------------- 改
#### let msg = 'UPDATE websites SET name = ?, url = ? , id=?'
#### let setData = ['对应的数据',id]
#### sql.query(msg,setData,(err,res)=>{})


