const mysql = require('mysql')
let sql = mysql.createConnection({
    host: 'localhost',
    user: 'xieyu',
    password: 'xieyu8888',
    port: '3306',
    database: 'node'
})
sql.connect()

let addValue = 'INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)'
let addData = ['张三','https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg','999','DEF']
sql.query(addValue,addData,(err,res)=>{
    if(err){
        console.log(err.message);
    }
    console.log(res);
})
sql.end()