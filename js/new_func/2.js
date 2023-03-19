//立即运行函数 最外层括号括起来
//window
//this 
(() =>{
    //不会分配this给他,
    console.log(this);
})()