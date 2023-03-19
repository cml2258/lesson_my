本周的slogan

- 每天一题leetcode
    每周一篇文章
    年前小程序

- js 数据类型？
    7种简单数据类型，一种复杂数据类型 共8种
    let a=1；  值的拷贝
    简单数据类型:
        数值类型 Number
        字符串 String
        布尔值 Boolean
        undefined
        null
        BigInt  BigInt() 后+n
        Symbol

    let b={}；
    复杂数据类型    地址的拷贝
        都是对象

- 引用式赋值考点
    1. 复杂数据类型在内存中存在哪里？
        栈内存   简单数据  +  函数栈
        堆内存  复杂数据     {name: '龙', age: 17}   &0x1123 -> 变量 
    2. let a = b =  {name: '龙', age: 17}     a  b 不是简单数据类型的值的拷贝， a  b 指向同一个地址  
    3. 将对象 传递给函数的时候， 引用式赋值  不太好的写法， 因为， 在函数内部，
        有可能会修改这个对象 导致理解错误 
    4. person 重新赋值   指向的地址就改变了 


- JS es6 提供两种新的数据类型 Symbol 唯一值
    BigInt 大数 解决特定问题
    - 函数来创建 BigInt(1n) Symbol('name') 首字母大写
        不是构造函数 不能new
    - Symbol.for('name')
    - 作为对象属性，当一个复杂对象中含有多个属性的时候 被多个人维护的时候
        送一个特别一点的礼物 ，记住你
    - 类的私有方法

- JS 申明一个字符串有两种方法
    Number Boolean String 是三种简单数据类型（值本身），同时js也内置了三种类（
        new Number()  值和值上的操作的集合    
    ）
    ""
    new String('')  显示组包
    数组？  [1,2,3]  new Array(1,2,3)

    包装类
    let str = "hello world"
    str.length  -->  new String(str) length?  隐式组包
    str 拆包

    js 语言是弱类型语言，     变量 赋值不同类型的值
    隐式的转化， 很难？
    str.length  先组包      new String("hello world") string 包装类
    str

    为什么要提供组装类？ 为了统一面向对象风格的写法
    let(str)    str.length

- getTypeof 功能函数
    1. typeof 运算符不靠谱
        - typeof null   object   简单数据 
            js 早期的bug , 一直都在  
            null  32位存值 000  最高位是 类型
            0000000000000000000000000000 null 
            object  前三位  000 也是 
        - 复杂数据类型