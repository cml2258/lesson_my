# 函数也是对象
 -对象 多个键值对集合 一个键值叫做对象的一个属性
    eg：var person={
        name：'lisa', //键值对
        age:'20'  //键值对
    }
    1.函数是对象 特殊对象
        var 函数={
            name：函数名，
            code：{}  //可被调用通过 ‘函数名（）’
        }
        -function statement写法 function test() 没有返回值
        -function expression写法 var demo=function() 匿名函数 有一个返回值
    2.数组是一个对象，是一个键被省略的对象。
        数组中数值的顺序定义被忽略了name：0，1，2......
        var animal=['cat','dog','bear']
        等同于 （含有多个键值对的数组name：value）
        var animal={
            '0':'cat',
            '1':'dog',
            '2':'bear'
        }
 -原始类型 一个键值对
    eg：var pen='宝克'
    1.boolean、number、string、null、undefined以及ES6提出的symbol
    2.定义一个变量为空不使用 undefined，使用null
        var a=null
        undefined是JavaScript引擎赋初值