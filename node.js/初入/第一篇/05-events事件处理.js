const events = require("events") // 导入events模块
/* console.log(events === events.EventEmitter); */ // true
let eventEmitter = new events.EventEmitter() // 创建eventEmitter对象
eventEmitter.on("text",()=>{
    console.log('嗨咯,我是text');
})
// eventEmitter.emit("text") //  直接打印嗨咯,我是text
/* setTimeout(()=>{
    eventEmitter.emit('text')
},1000) */ // 1秒后打印 嗨咯,我是text

