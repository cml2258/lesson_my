// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
    // sayHello(){

    // }
// }
//构造函数 对象添加属性，
//共享类的方法
var name="xz";
var age="10";
//构造函数
function person(name,age){
    this.name=name;
    this.age=age;
}
person.prototype.sayHello=function(){
    //this
    console.log(`hi,我是${this.name},今年${this.age}`)//${}字符串模板，不要拼接符号
    console.log("hi, i am "+this.name+",this year i am "+this.age);
}

const jay=new person("杰",18);//构造函数
console.log(jay.name);
jay.sayHello();//对象被运行

const hu=new person('hu',19);
hu.sayHello();

// const fu=jay.sayHello;
// fu();//普通函数调用 undefined 运行方式有问题