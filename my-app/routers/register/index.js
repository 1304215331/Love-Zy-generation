/* 注册 */
const mysql = require("mysql")
let register = (req, res) => {
    let d = new Date()
    let sql = mysql.createConnection({ user: 'xieyu', password: 'xieyu8888',database: 'node'})
    sql.connect()
    let {name,username,password} = req.body
    if(name && username && password){
        let msg =  'INSERT INTO login(id,name,username,password,cok) VALUES(0,?,?,?,?)'
        let arr = [name,username,password,d]
        sql.query(msg,arr,(err)=>{
            if(err) console.log(err);
            res.send({request:'200',msg:'注册成功'})})
    }else{
        res.send({request:'400',msg:'参数错误'})
    }
}
module.exports = register