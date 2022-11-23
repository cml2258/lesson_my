# 一起读文章，提升我们的认知

1. c语言 过程式 函数 main（）
    js 基于（面向）对象？
    面向？ 基于？ 

2. js 原来没有class关键词
    var es5   let const es6 以后
    es6 2015 才有了class 关键字
    js不是一种真正的面向对象编程语言OOP（object-oriented programming）,基于对象的语言，这个对象就是object
    object 是所有对象的原型

3. 除了简单数据类型，都是对象
    任何对象都有一个__proto__私有属性去说明他基于哪个对象创建的

4. js 本来没有类， 早期class关键字都没有
    但是内置了一个object对象，
    但其他所有对象都基于这个空对象进行创建
    在把这个对象构建过程（属性和方法集合），用一个函数来封装 
    new person（）得到了 基于对象的新的对象

5. 基于对象，生成实例对象的原始模型 一步步构建
    缺点是慢 重复

6. 函数封装对象的时候
    缺点是  instanceof

7. js 使用构造函数的方式来创建类
    以new的方式运行 
    对象构建过程的封装 this指向实例
    另外 class有的 instanceof也有
    并且兄弟对象之间基于的对象一致
    cat3.constractor属性

8. js 基于对象
    obj.__proto__ === object.prototype
    obj instanceof object
    obj.constructor === Cat

9. js 中创建类 写个构造函数就完成了

10. js JS构造类的流程
    - 类就是属性和方法集合的模板， 抽象的， 
    - 先使用构造函数 定义实例属性的构造过程， 每个对象属性是不一样的， 
        归实例自己所有  this    具象 
    - 由于 实力们公有的属性和方法， 没有必要放在构造函数里， 因为会消费没必要的内存 
    - 每个函数都有一个prototype 属性， 专门用来设计 共享的属性会方法对象
        原型对象 
        js 类  =  构造函数（constructor） + prototype 
        new 构造函数（Constructor）  实例对象
    - 实例是怎么拿到构造函数的prototype里的属性（property）和方法（method）的呢
       obj.__proto__ === object.prototype
