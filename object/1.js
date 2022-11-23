// 对象就是属性和方法的集合
// OOP Object Oriented Programming 
// class Person {

// }
// const xlz = new Person();
let obj = {
    name: '小玲子',
    sayHi() {
        console.log('hello');
    }
}
obj.name 
// 对象
const xlz =  new Object(); //[] Array  {} js  Object 函数 也是对象 一切对象的原型
// 对象字面量都基于Object 来构造， 原型式面向对象 

xlz.name = '小玲子'
xlz.sayHi= function() {
    console.log('hello');
}
console.log(xlz);