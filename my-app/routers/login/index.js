/* 登录 */
const mysql = require("mysql")
let login = (req,res)=>{
    let sql = mysql.createConnection({ user: 'xieyu', password: 'xieyu8888',database: 'node'})
    sql.connect()
    let {username,password} = req.body
    console.log(username);
    console.log(password);
    if(username && password){
        let msg = `SELECT * from login where username=${username} AND password=${password}  `/* AND password=${password} */
        sql.query(msg,(err,data)=>{
            if(err) console.log(err);
            if(data.length !== 0){
                res.send({request:'200',msg:'登录成功',data})
            }else{
                res.send({ request:'201',msg:'账号密码错误,请重新登录'})
            }
            console.log(data);
        })
    }
    else{
        res.send({ request:'400',msg:'参数错误'})
    }
}
module.exports = login