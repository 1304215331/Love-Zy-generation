var a = "嘻嘻"; // 声明变量  这样就必须是字符串
console.log(a);
/* 试试继承 */
var Son = /** @class */ (function () {
    function Son() {
    }
    Son.prototype.name = function () {
        console.log('我是一个name嘻嘻');
    };
    return Son;
}());
/* 下面继承 */
var obj = new Son();
obj.name();
/* 声明变量的语法 */
var any = '打算爱的add'; // 任意类型
var string = "哈哈"; //字符串
var number = 123; // 数字 number类型
var isShow = true; // boolean类型
var arr = [1, 2]; // 数组类型
var x = ['嘻嘻', 22]; // 元组  第一个必须是字符串  第二个必须是数字
var color;
(function (color) {
    color[color["pink"] = 0] = "pink";
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
})(color || (color = {})); // 枚举
console.log(color); /* 打印结果  {0: "pink",1: "red",2: "blue",pink: 0,red: 1,blue: 2}*/
console.log(color.blue); //打印2
console.log(color[2]); // 打印blue
function fn() {
    alert("嘻嘻");
}
var b;
b = 2; // √
// b = null  X
// b = undefined X
var c;
c = 22; // √
c = null; // √
c = undefined; // √
var anum = 2; // 预编译成  let anum:number = 2  
// anum = '12'  报错
/* 练习作用域 */
var astring = '外部作用域'; // 外部作用域
var Fath = /** @class */ (function () {
    function Fath() {
        this.num_val = 14; // 实例变量
    }
    Fath.prototype.fn = function () {
        var nBox = 111; // 局部变量
    };
    Fath.s = '静态变量'; // 静态变量
    return Fath;
}());
/* 函数 */
function add(x, y) {
    return x + y;
}
console.log(add(3, 5));
function add1() {
    return '嘻嘻';
}
function fnstring(a, b) {
    return console.log(a + b);
}
// fnstring('张三')  错误  缺少参数
// fnstring('张三','18','头大')  错误  参数过多
// fnstring(14,'张三')  错误  参数必须全是字符串
fnstring('张三', '李四'); // 正确
function fnstring1(a, b) {
    if (b) {
        return console.log(a + b);
    }
    else {
        return console.log(a + b);
    }
}
// fnstring('张三','18','头大')  错误  参数过多
fnstring1('五谷', '丰登'); // 正确
