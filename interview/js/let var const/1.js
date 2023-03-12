//函数提升的是值
console.log(func,",,,,,,,,,,");
// var c;
console.log(c,"----------"); //打印不了
//定义变量
//作用域 全局作用域 范围
var a = 1; //挂载在 全局对象上  window  污染了window对象
let b = 2; //支持块级作用域 不会挂载在window
// 代码从上到小执行
// console.log(d);//报错了
// js变量会提升 变量的定义，提升到它所在的作用域的最顶端
function func(){
    // console.log(d, "/////////");
    let d = 2; // var 会变量的声明提升 并不是什么好事，代码的可读性被影响了    let 不会提升   es6 + 
}
func();
var c = 3;
// var c; //弱类型语言 类型可以不申明
// c = 3;
