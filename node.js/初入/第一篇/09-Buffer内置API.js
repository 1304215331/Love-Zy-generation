const buf1 = Buffer.alloc(10) // 返回一个长度为10 并且用0填充
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
const buf2 = Buffer.alloc(10, 2) // 返回一个长度为10 并且用02填充
console.log(buf2); // <Buffer 02 02 02 02 02 02 02 02 02 02>
const buf3 = Buffer.allocUnsafe(10) // 创建一个长度为 10、且未初始化的 Buffer
console.log(buf3); // <Buffer d6 08 00 00 00 68 65 78 00 00>
const buf4 = Buffer.from([1, 2, 3]) // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
console.log(buf4); // <Buffer 01 02 03>
const buf5 = Buffer.from("text")
console.log(buf5); // <Buffer 74 65 78 74>
const buf6 = Buffer.from("text","latin1")
console.log(buf6); // <Buffer 74 65 78 74>
