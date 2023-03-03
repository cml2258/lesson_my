let cai = { //对象， js没有类
    nickname:"cml",
    sayHi(){
        console.log('hi');
    }
}
let aTao = {};
// console.log(aTao.__proto__);
// 拦截 __proto__ 任何一个对象都拥有的私有属性
//原型
aTao.__proto__= cai;
console.log(aTao.nickname);