//构造函数
//js function 代替
//__proto__私有属性
function person(name,age){
    this.name=name;
    this.age=age;
}
// this指向实例
const xlz=new Person('小玲子', 16);
console.log(xlz);