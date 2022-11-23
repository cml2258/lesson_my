# 营销h页面特效开发
- 招商银行

1. <!DOCTYPE html>
    html5 版本声明

2. rotateX（90deg） 面对着我 推倒 顺时针
    rotateY 龙哥在跳钢管舞
    rotateZ 轮胎
    perspective:800px 视点 眼睛离屏幕的距离 远近 大小
        不可以超过perspective，超过在我们后面就看不见了
    transform-style：perseve-3d

3. html 怎么看到页面的（用户体验 
    html（结构）+css（样式） js晚一点（交互，DOM动态设置样式 .style 会等html和css下载完成后执行）
    - 下载html 文档
    - link script image......
        启动下载 css href   不会阻塞html下载 放到头部
        script src  放在最后  阻塞
        image src

4. chrome 浏览器内核 webkit
    id 浏览器 edge
    mozilla
    360 如果本地装了chrome webkit
    否则ms
    实验中新属性 可能需要 添加 支持
    -webkit-backface-visibility: hidden;
5. border-redius只要大于正方形宽高就是一个圆

- 如何隐藏一个元素，区别？
    display:none;隐藏 元素不解析 离开了文档流
    opacity:0; 透明度为零 
    visibility:hidden;
    文档流 一个html文件就叫一个文档
    盒子，html元素 像水流一样 从上到下（块级block），从左到右（inline：inline-block）从外到里
    html元素就在占有位置 = 盒子模型决定的=内容+padding+border+margin
    文档流+盒子模型 决定看到的页面
    脱离正常的文档流 定位了

- 3D 世界杯翻转特效
    1. 正面 立方体的最里面 translateZ（330) —> 移到最前面的面
    2. 下面 本来 也是layer1 在一起的
        transform-style：preserve-3d；
        transform ：rotateX（-90deg） 逆时针九十度
    3. screen screen_x90 类 顺时针旋转90度
        正面看不到了
        底面变成新的页面

- 添加了触屏事件系统
    pc click dbclick submit keydown keyup...
    Mobie 手势 tap pinch(down|up) 
    hammer.js 手势库

- 定位position 绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型。相对定位元素会相对于它在正常流中的默认位置偏移。
    1. absolute 绝对定位，元素可以放置到页面上的任何位置 相对于 static 定位以外的第一个父元素进行定位。
    2. fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。
    3. relative 生成相对定位的元素，相对于其正常位置进行定位
    4. inherit 从父元素  继承  position 属性的值