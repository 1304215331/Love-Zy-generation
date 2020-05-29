const mysql = require('mysql')
let sql = mysql.createConnection({
    user:'xieyu',
    password:'xieyu8888',
    database:'node'
})
sql.connect()
let setValue = 'UPDATE websites SET name = ?,url = ? WHERE id = ?'
let setData = ['李四','www.baidu.com',2]
sql.query(setValue,setData,(err,res)=>{
    if(err){
        console.log(err.message);
    }
    console.log(res.affectedRows);
})
sql.end()