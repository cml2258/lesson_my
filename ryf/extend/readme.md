- 搞清楚js实例的生成过程
    1. js类的构建比较独特
        - Person 构造函数
            JS是基于对象的面向对象
            模板
            //js没有类  对象     Object  {}
            var Person = {
                name:'...',
                age:'...'
            }
            //空对象
            js实例化过程不是血缘关系，new Person（）
            师徒关系
            var aChen = {}; //Object __proto__
            aChen 基于 Person
            aChen.name="美玲"
            aChen.age = 19
            n 个人 繁琐
        - 封装 用函数
            function Person(){// constructor
                this.
            }
            //血缘关系？ js不是
            let aChen = new Person();
            //基于对象的构造过程 new 本质
            //基于原型式的面向对象
            function Person(name,age){
                <!-- this.name = name -->
                var o ={};//基于对象  Object 空对象 o.__proto__
                o.name = name;
                o.age = age;
                <!-- o.sayHi = function(){
                    //每生成一次就 占内存
                } -->
                o.__proto = Person.prototype
                return o
            }
            o.__proto == Person.prototype
            //共享
            Person.prototype = {
                sayHi(){
                    //原型对象上没有，就在prototype属性上找这个方法
                }
            }
            <!-- let aChen = Person(); -->
            let aChen = new Person();

    2. JS本没有类，基本上都是对象(除了简单数据类型)
        - es6 以前没有class关键词
        - 一切皆对象  基于对象  任何对象都有原型， 默认是Object.prototype
        - js 函数可以封装类，完全可以实现基于对象的构建


    3. js为了实现基于对象式的类的构建，蛮拼
        - 用函数作为类的声明（首字母大写）， 特别
            封装了 实例的构建过程
            this(new)  指向实例，函数运行 完成给实例添加基于对象一样的属性
        - 实例的方法 不要放到构造函数里声明，因为给每个实例分配一个函数 内存是吃不消的（千千万）
            js 设计了prototype属性   函数也是对象（外面）
            function Person(){
                this.name
                this.
                <!-- new Person() -->
                <!-- constructor -->
            }
            //外面 有了原型 js 不再是传统的面向对象， 而是基于对象的
            Person.prototype = {
                sayHi(){

                }
            }
        - 实例调用 所有实例共享的方法时
            let aTao  = new Person();
            aTao.__proto__=Person.prototype
            aTao.sayHi()//基于原型的面向对象

- new 的过程发生了什么？ 



- a.constructor == Foo.prototype.constructor

- js 面向对象由一下概念组成
    1. 构造函数有prototype 属性， 值是一个对象， prototype对象归所有实例共享 
    2. 实例拥有一个__proto__ 私有属性 对象在查找完自身的属性和方法后， 找
        __proto__ 指向的原型对象去查找， 如果有， 返回， 没有？继续沿着原型对象去查找
        任何对象都有__proto__  不指定的话指向谁？ Object 
        这些原型对象形成了一条链， 原型链 
    3. cai  实例
        Pserson 构造函数
        Person.prototype 原型对象
        Person.prototype.__proto__ 原型对象   Object   js 内置的基于对象
        cai.toString() 原型链上的方法， 对象查找时会沿着原型链一直查找
        Object 是（函数也是）对象， 也是构造函数
        Object.prototype.__proto__ == null 到顶了，都没有， undefined  
        对象的终点是null 

        cai.__proto->Person.prototype
                        Person.prototype.__proto__->Object.prototype
                            Object.prototype.__proto ->  null

    4. 在java c++  创造了面向对象的类式概念， 没有为什么，血缘关系 
        c 语言  函数式， 没有面向对象的概念
        js 更加优秀  基于对象（原型式）的类式（面向对象）概念
        1. 没有血缘关系 
            constructor Person() 
        2. 基于对象   偶像
            cai 基于 Person.prototype 
        3. 一旦基于对象， 一堆的原型在原型链上给你提供方法 
        4. 终点是null 