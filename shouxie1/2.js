const arr=[1,2,3]
//末尾添加一个元素
//在末尾添加多个元素
//返回值是数组的新长度
Array.prototype.push=function(num1,num2,num3){
    //Array.prototype
    //this 面向对象内部，方法里this指向实例后的对象
    //如何得到所有的参数 [] arguments
    console.log(arguments,'//////')
    //覆盖原有方法
    //console.log('----------')
    console.log(typeof arguments,Object.prototype.toString.call(arguments))//确定具体的对象类型
    //所有复杂数据类型 typeof后，都叫object，
    // console.log(arguments.length);
    for(let i=0;i<arguments.length;i++){
        this[this.length]=arguments[i];
    }
    return this.length
}
arr.push(4,5,6)
console.log(arr);