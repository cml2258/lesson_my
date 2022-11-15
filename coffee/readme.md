# 泡一杯咖啡
    1. 把水煮沸
    2. 用沸水冲泡咖啡
    3. 把咖啡倒进杯子
    4. 加糖和牛奶

传统的面向对象
coffee类
kpqn instance

- js 面向对象的实现方式
    1. 对象字面量 表达性强 独一无二
        {
            name:"小陈",
            age:20
        }
    2. 模板批量生产的
        class + constructor + new
    3. 函数生成

- 类的构建过程
    1. 定义了一个类coffee模板
    2. 在构造函数（constructor）中,传了一个type属性
        this.type this是实例后的对象
        我们要的实例对象构建出来
    3. 添加一些方法，public公有方法
        cof.boilWater();

- 面向对象的语法总结
    1. class 类的抽象 咖啡和茶抽象了一下 父类
    2. extends 继承 
        子类就拥有了父类的模板
    3. 多个子类 细节略有不同
        重写父类（同样的方法名）方法......
        super调用父类的方法