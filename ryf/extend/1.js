//定义（封装）了人这个类
//两种类的封装写法，
//js 正宗写法  效果一样的
//es5 基于对象的原型式
//
// let obj = {} //Object(构造函数) Object.prototype    new Object()
//obj._proto_这个对象的原型
function Person(name,age){
    this.name = name;
    this.age = age;
}
//函数都有一个prototype 对象
//函数也是对象 
Person.prototype = {
    sayHi(){
        console.log("hello");
    }
}
//es6+ 面向对象式， 传统的java， c++ class关键词
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log("hello");
    }
}