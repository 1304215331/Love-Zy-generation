const buf = Buffer.from('jackLove', 'ascii')

console.log(buf.toString("base64")) // amFja0xvdmU= (base64格式)
console.log(buf.toString("utf8"))  // jackLove
console.log(buf.toString("ascii")) // jackLove
console.log(buf.toString("utf16le")) // 慪正潌敶
console.log(buf.toString("ucs2")) // 慪正潌敶 utf16le的别名
console.log(buf.toString("hex")); // 6a61636b4c6f7665 (将每个字节编码为两个十六进制字符)
console.log(buf.toString("latin1")); // jackLove
console.log(buf.toString("binary")); // latin1的别名
