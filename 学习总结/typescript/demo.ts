let a: string = "嘻嘻"  // 声明变量  这样就必须是字符串
console.log(a);
/* 试试继承 */
class Son {
    name():void{
        console.log('我是一个name嘻嘻');
    }
}
/* 下面继承 */
let obj = new Son();
obj.name();
/* 声明变量的语法 */
let any:any = '打算爱的add' // 任意类型
let string:string = "哈哈"  //字符串
let number:number = 123 // 数字 number类型
let isShow:boolean = true // boolean类型
let arr:number[] = [1,2] // 数组类型
let x:[string,number] = ['嘻嘻',22] // 元组  第一个必须是字符串  第二个必须是数字
enum color {pink,red,blue} // 枚举
console.log(color);  /* 打印结果  {0: "pink",1: "red",2: "blue",pink: 0,red: 1,blue: 2}*/
console.log(color.blue); //打印2
console.log(color[2]); // 打印blue
function fn():void { // void表示这个函数没有返回值
    alert("嘻嘻")
}
let b:number
b = 2 // √
// b = null  X
// b = undefined X
let c:number | null | undefined
c = 22 // √
c = null // √
c = undefined // √
let anum = 2  // 预编译成  let anum:number = 2  
// anum = '12'  报错
/* 练习作用域 */
let astring:string = '外部作用域' // 外部作用域
class Fath {
    num_val = 14 // 实例变量
    static s = '静态变量' // 静态变量
    fn():void{
        let nBox:number  = 111  // 局部变量
    } 
}
/* 函数 */
function add(x:number,y:number):number{ // 参数只能是number类型   return还回的也只能是number类型
    return x + y
}
console.log(add(3,5));
function add1():string{ // return只能是字符串
    return '嘻嘻'
}
function fnstring(a:string,b:string){
    return console.log(a+b);
}
// fnstring('张三')  错误  缺少参数
// fnstring('张三','18','头大')  错误  参数过多
// fnstring(14,'张三')  错误  参数必须全是字符串
fnstring('张三','李四')  // 正确
function fnstring1(a:string,b?:string){ // b为可选参数
    if(b){
        return console.log(a+b);
    }
    else{
        return console.log(a+b);
    }
}
// fnstring('张三','18','头大')  错误  参数过多
fnstring1('五谷','丰登')  // 正确