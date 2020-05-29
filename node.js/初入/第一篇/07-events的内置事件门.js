const events = require("events")
let eventEmitter = new events.EventEmitter()

// 注册监听事件
eventEmitter.addListener('text', () => {
    console.log('我是addListener注册的');
})
eventEmitter.on("text", () => {
    console.log('我是on注册的');
})
eventEmitter.once("text", () => {
    console.log('我是once注册的'); // 只会执行一次
})
eventEmitter.on("text1", () => {
    console.log('我试text1');
})



// 触发事件
eventEmitter.emit("text") //我是addListener注册的 我是on注册的 我是once注册的
eventEmitter.emit("text1") // 我试text1
// 移除add事件
eventEmitter.removeAllListeners("text1") // 移除text1监听器
setTimeout(() => {
    eventEmitter.emit("text") //我是addListener注册的  我是on注册的
    eventEmitter.emit("text1") // 无
}, 3000)