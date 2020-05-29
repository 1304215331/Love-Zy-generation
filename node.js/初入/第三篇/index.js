function father (){
    this.son = (a)=>{
        console.log(`你好啊${a}`);
    },
    this.add = (a,b)=>{
        console.log(a + b);
    }
}
// 暴露add函数出去
module.exports = father