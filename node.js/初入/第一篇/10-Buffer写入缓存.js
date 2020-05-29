const buf = Buffer.alloc(256)
let len = buf.write("我是写入缓存的")
console.log(buf.length);
