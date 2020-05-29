const http = require('http')
const url = require('url')
let https = router => {
    let add = (req, res) => {
        var pathname = url.parse(req.url).pathname;
        router(pathname)
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset="utf-8"'
        });
        res.write('呵呵嗨咯');
        res.write('/n');
        res.write('哈哈哈哈');
        res.end()
    }
    http.createServer(add).listen(8888)
}
exports.https = https