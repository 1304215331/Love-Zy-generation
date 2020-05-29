const events = require("events")
let eventEmitter = new events.EventEmitter()

eventEmitter.on("text",(a,b)=>{
    console.log(`
    hallo Word
    我是${a}
    我是${b}
    `);
})
// 1秒后打印 hallo Word 我是参数a  我是参数b
setTimeout(()=>{
    eventEmitter.emit("text",'参数a','参数b')
},1000) 