const mysql = require('mysql')
let setDatas = (req, res) => {
    let sql = mysql.createConnection({
        user: 'xieyu',
        password: 'xieyu8888',
        database: 'node'
    })
    sql.connect()
    let msg = 'SELECT * FROM websites'
    sql.query(msg, (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.send({
            response: 200,
            msg: '获取数据成功',
            data
        })
    })
    console.log('被访问了__查数据');
    sql.end()
}
let addDatas = (req, res) => {
    let sql = mysql.createConnection({
        user: 'xieyu',
        password: 'xieyu8888',
        database: 'node'
    })
    sql.connect()
    let {
        name = '', url = '', alexa = '', country = ''
    } = req.query

    if (name && alexa) {
        let addValue = 'INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)'
        let addDate = [name, url, alexa, country]
        sql.query(addValue, addDate, (err, data) => {
            res.send({
                response: 200,
                msg: '新增成功',
            })
        })
        console.log('被访问了__新增');
        sql.end()
    } else {
        res.send({
            response: 400,
            msg: '参数错误',
            data: []
        })
        sql.end()
    }
}
let deleteDatas = (req, res) => {
    let sql = mysql.createConnection({
        user: 'xieyu',
        password: 'xieyu8888',
        database: 'node'
    })
    sql.connect()
    let deleteData = `DELETE FROM websites where id=${req.query.id}`
    console.log(req.query.id);
    sql.query(deleteData, (err) => {
        if (err) {
            return console.log(err.message);
        }
        res.send({
            response: 200,
            msg: '删除成功'
        })
        console.log('删除接口被访问了');
        sql.end()
    })
}
let setOneData = (req, res) => {
    let sql = mysql.createConnection({
        user: 'xieyu',
        password: 'xieyu8888',
        database: 'node'
    })
    sql.connect()
    let setone = 'SELECT * FROM websites'
    sql.query(setone, (err, data) => {
        if (err) {
            return console.log(err.message);
        }
        var list = {}
        data.map((item, index) => {
            if (item.id == req.body.id) {
                list = item
            }
        })
        res.send({
            response: 200,
            msg: '数据获取成功',
            list
        })
        console.log('访问了根据id查数据');
        sql.end()
    })
}
let setDataPost = (req, res) => {
    let sql = mysql.createConnection({
        user: 'xieyu',
        password: 'xieyu8888',
        database: 'node'
    })
    sql.connect()
    let setValue = "UPDATE websites SET name=?,url=?,alexa=?,country=? WHERE id = ?"
    console.log(`
        前端传的的name:${req.body.name}
        前端传的的url:${req.body.url}
        前端传的的alexa:${req.body.alexa}
        前端传的的country:${req.body.country}
    `)
    let {
        name,
        url,
        alexa,
        country,
        id
    } = req.body
    let setDataSon = [name, url, alexa, country, id]
    if (!name || !url || !alexa || !country || !id) {
        res.send({
            response: 400,
            msg: '参数错误'
        })
        return false
    }
    /* console.log(req.query); */
    sql.query(setValue, setDataSon, (err, data) => {
        if (err) {
            return console.log(err.message);
        }
        res.send({
            response: 200,
            msg: '修改成功'
        })
        console.log('修改接口被访问了');
        sql.end()
    })
}
module.exports = {
    setDatas,
    addDatas,
    deleteDatas,
    setOneData,
    setDataPost
}