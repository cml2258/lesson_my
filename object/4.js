function Cat(name, color) {
    // {}  Object 
    return {
        name: name,
        color: color
    }
}
// 基于对象 复用 cat1 instanceof cat——> false 没有关系
var cat1 = Cat("大毛","黄色");
var cat2 = Cat("二毛","黑色");