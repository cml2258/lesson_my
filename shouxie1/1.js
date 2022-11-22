//数组 优势是 以O(1)的访问时间到第i个元素
const arr=[1,2,3];
console.log(arr,push2(4),"////");
//返回的是数组的length
const arr2=['a','b','c'];
// arr.push(4);//尾部添加
// console.log(arr.push);//js不断动态扩容
// console.log(typeof arr)//object
//arr.push()
//如何在arr object 上添加push2
Array.prototype.push2=function(num){
    //arr[1,2,3,4]
    console.log(num,'-------');
    console.log(this);
    //如何拿到arr？抽象
    this.push(num);//this 指向调用方法的实例
    //this ->arr,最后一个下标是 length - 1
    // this.length就是加入元素的位置
    this[this.length]=num;
    return this.length;

}
console.log(arr,push2(4),"??????");
arr.push2(5)
console.log(arr.push2(6))
// arr2.push2(4)
// console.log(arr);