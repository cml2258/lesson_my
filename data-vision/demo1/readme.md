# 大厂快速路 数据可视化

- 认识数据
    如果有十万条数据要在页面上展示，怎么办？
    table ul>li
    构建DOM树  CSS渲染树  显示页面 白屏 内存溢出
    分页 Table + Pagination 
    滚动到底部加载更多 better-scroll
- 确定任务
    增强 数据的可读性 图表

- 方案 条形
    x name
    y value

- 技术方案的选择
    - canvas 2D  画图方案  绘制API 
        context.strokeStyle边框颜色 属性值（color，gradient渐变）
        context.strokeRect绘制矩形
        fillStyle 属性，填充颜色
        lineWidth设置返回当前线条宽度
        rect()创建矩形
        fillRect()绘制被填充矩形
        scole()缩小当前绘图至更大或更小
        rotate()旋转
        translate()偏移起始点
        transform()替换当前的转换矩阵，在原来的基础上接着在原点画
        setTransform()将当前转换重置为单位矩阵。然后运行 transform()
        还有文本操作和图像绘制等API和属性（链接：https://www.w3school.com.cn/tags/html_ref_canvas.asp）

    - SVG 矢量图
    - webgl 3D 

- 数据整理
- 绘制API canvas 
- canvas 是画出来的，是像素级别的
- SVG 是数学图形声明出来的， 无限拉升
    声明式的 不需要写代码
    <svg></svg>
    <text></text>
    <g/>
    
- 为什么Vue 不用DOM编程？
    太耗性能
    浏览器的原理相关
    页面渲染 html/css
    js执行 由另外的进程负责管理
        （append 发生时，不止在js进程中，还在渲染进程，需要涉及到页面的重绘重排）

- SVG  Canvas 区别？
    数据简单，SVG优秀， 缺点是性能不好，频繁的操作DOM，SVG 依托标签来完成功能
    canvas 绘图API更丰富（适合做游戏） GPU 负责，如果启动3D渲染，完全交给GPU负责，适用于大数据。
    API有点多， 底层很那啥？ echarts库