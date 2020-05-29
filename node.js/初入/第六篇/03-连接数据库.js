const mysql = require('mysql')
let sql = mysql.createConnection({
    host:'localhost',
    user:'xieyu',
    password:'xieyu8888',
    port:'3306',
    database:'node'
})
sql.connect()
let msg = "SELECT * FROM websites"
sql.query(msg,(err,res)=>{
    if(err){
        console.log(err.message);
    }
    console.log(res);
})
sql.end()