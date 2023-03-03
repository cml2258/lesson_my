function Cat(name,color){
    this.name = name;
    this.color = color;
    // this.type = "猫科动物";//有点浪费内存了
    // this.eat = function(){alert("吃老鼠");};
    }
    //prototype
    //拿到构造函数的prototype对象的属性
    // 构造函数的prototype对象是用来提供所有实例 共享的 属性或方法的

    Cat.prototype.type='猫科动物'//省内存
    Cat.prototype.eat=function(){console.log("吃老鼠")}

    var cat1=new Cat('大猫','黄色');
    console.log(cat1.name,cat1.color,cat1.type);
    cat1.eat()

    var cat2=new Cat('小猫','白色');
    console.log(cat2.name,cat2.color,cat2.type);
    cat2.eat()
