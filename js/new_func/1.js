var stuA = {
    name:"meiling"
}
var stuB = {
    name:"liu"
}

function sayHi(...args){
    console.log(arguments,...args);//arguments会把传过来的所有参数放在一起 ...args展开运算符
    console.log(`你好，我是${this.name}`)
}
Object.prototype.sayHi = sayHi;//原型链

//stuA ,stuB 都能sayHi
//call 改天换命 ， 手动指定this指向
//this -> 调用对象stuA stuB
// sayHi.call(stuA);
// sayHi.call(stuB);
// stuA.sayHi();
sayHi.apply(stuB,[1,2]);//apply 手动指定this
sayHi.call(stuB,1,2)
// var func = sayHi.bind(stuA);
// func();