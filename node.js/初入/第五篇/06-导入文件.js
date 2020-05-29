const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require("body-parser")
const multer = require("multer")
/* app.use(bodyParser.urlencoded({extended:false})) */
let urlbodyParser = bodyParser.urlencoded({
    extended: false
})
app.use('/public', express.static('public'))
app.use(multer({
    dest: '/tmp/'
}).array('image')); // 不知道什么意思
app.get('/text.html', (req, res) => {
    res.sendFile(`${__dirname}/text.html`)
})
app.post('/file_upload', urlbodyParser, (req, res) => {
   /*  console.log(req.files[0]); */ // 上传文件的信息
    let imgPath = `${__dirname}/${req.files[0].originalname}` // 保存路径
    /* 读取文件 */
    fs.readFile(req.files[0].path, (err, data) => {
        /* 写入文件 */
        fs.writeFile(imgPath, data, (err) => {
            if (err) {
                return console.error(err)
            } else {
                var obj = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname,
                    
                }
            }
            console.log(obj);
            /* console.log(req.hostname);  localhost 请求头*/
            res.send(JSON.stringify(obj))
        })
    })

})
app.listen(8081)
console.log('服务器开启');