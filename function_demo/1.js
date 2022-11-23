//封装 普通的相加函数
//add 函数声明在哪里？
"use strict"
//启用js的严格模式
function Test(){
    //构造函数用大写
    //this 函数的运行方式决定
    console.log(this)
    this.x=1
}
//函数可以被new 被new的函数也要构造函数
function add(x,y){
    //检验参数 js 独特 this，arguments
    //两个关键字对象
    console.log(this,argumens);
    return x+y;

}
let obj={
    add:add
}

console.log(add(1,2));//所有语言
Obj.add(1,2)//作为对象的方法调用