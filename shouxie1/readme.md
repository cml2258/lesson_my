# JS 考试终点之手写代码

- push
    数组的功能？
    哪两种数据结构的什么操作？
    线性和非线性
    [] 或链表 队列FIFO/ 栈FILO
    [{value:1,next:},{value:2,next:}] 不连续的


    [1,2,3] 初始地址， arr[0] arr[1] arr[2] 连续的，new Array(1000000) 浪费 内存溢出

    物理地址？
    arr[i]=&arr+(i-1)*2(每个元素分配到地址空间)


- js 和其他语言不同的地方
    原型的概念 prototype:一个简单的对象，用于实现对象的 属性继承。可以简单的理解成对象的爹.
    [1,2,3](实例)   Array(类) const arr2=new Array(1,2,3) arr2是实例
    1. 声明数组 在js里有多种方法
        [1，2，3] new Array(1,2,3)
    2. 数组对象实例添加一个公有方法
        js里面，Array类的prototype属性上 对象 添加自定义的push2
        Array.prototype.push2=function(){}
    3. 对象的方法中，this 关键字指向谁?
        指向调用它的对象
    4. arguments 指向