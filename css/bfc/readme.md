# css 必考题BFC
    我们看到的页面 哪些规则决定的呢?
    - 文档流
        正常文档流 
        脱离文档流
            none 
            position 不为static
            float 元素离开了文档流
            父元素拿不到子元素的高度
            <!-- 父元素 定死高度 -->
            弹性布局 子元素在一行上面显示, float在一行

- 在正常文档流中
    float 会让元素,离开文档流
    父元素,不会知晓子元素大小了
    更严重的问题是? 文档流出问题了,下面的盒子会盖到float元素
    一定要让父元素拿到 高度,
    在正常的文档流中,可以开启新的BFC css 魔法上演了
    html 是最大的BFC 由浏览器自动创建给予
    - 在BFC里,父元素高度会将浮动元素参与计算
    - 创建BFC的方法
        - overflow:hidden
        - display:inline-block
        - position:absolute fixed
        - 浮动
        - flex
        - display:table

    - 在同一个BFC里,垂直方向的距离,由Margin决定 相邻两个margin会重叠