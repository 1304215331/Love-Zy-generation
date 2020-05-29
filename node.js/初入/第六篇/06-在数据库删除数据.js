const mysql = require('mysql')
let sql = mysql.createConnection({
    user:'xieyu',
    password:'xieyu8888',
    database:"node"
})
sql.connect()
let del = "DELETE FROM websites where id=5"
sql.query(del,(err,res)=>{
    if(err){
        console.log(err.message);
    }
    console.log(res.affectedRows);
})
sql.end()