- 你知道css变量吗？
    - css4（next）  新功能
    - 复用变量，全局修改一次，所有地方相应都改
    - ：root 根选择器
    - --blur 命名风格带--
    - var(--blur) 使用变量
    - js 来修改  document.documentElement.style.setProperty('--blur','')

- HTML5 考点
    - 拖拽能力 html5
    - 本地存储 localStorage
    - 语义化标签 section footer header article SEO(搜索引擎优化)
    - FORM 的新控件
        使用更丰富的表单控件， 通过type的设置， 更加方便收集用户信息
        input type=" text|number|range|color"

- 消息提醒组件的样式逻辑
    css 变量 好处可以自身解决 样式逻辑
    1. 0  sup 隐藏
    2. > 0 显示
    3. sup 宽度是变化的？
    4. 99+ 怎么做？

- 不依赖js  css变量独自解决了样式逻辑
    性能提升
    calc() 此 CSS 函数允许在声明 CSS 属性值时执行一些计算。它可以用在如下场合：<length>、<frequency>, <angle>、<time>、<percentage>、<number>、或 <integer>。
- .style.setProperty('var_name', value)
    可以创造更加丰富的界面特效 