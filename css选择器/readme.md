# CSS 选择器

- 用于查找或选取 HTML元素
- 五类选择器
    1. 简单选择器 名称(标签)、id(#)、类（.）、通用选择器（*）、分组选择器
        id是页面内唯一的 不能以数字开头
        类选择器 特定标签受影响 多个类共同作用 不能以数字开头
        通配符选择器 页面内所有元素
        分组选择器 逗号隔开
    2. 组合选择器 特定关系
        后代选择器（空格） 指定元素后代的所有元素 
            div p{

            }
        子选择器（>）指定元素子元素的所有元素
            div > p{

            }
        相邻兄弟选择器（+）指定元素的相邻同级的元素 元素必须具有相同的父元素，“相邻”的意思是“紧随其后”
            div + p{

            }
            紧随div的，且具有想同父元素的p元素
        通用兄弟选择器（~)
            div ~ p{

            }
    3. 伪类选择器 待定状态
         伪类用于定义元素的特殊状态。
         对大小写不敏感
         锚伪类：a：hover必须在a:link和a:visited之后，a:active必须在a:hover之后
         与css结合：
            a.highlight.hover{
                color:#ff0000;
            }
            div:hover{

            }
            div：hover p{
                display：block；
            }
            css-：first-child 指定元素的第一个想要元素 
                p i：first-child{} 所有p中第一个i
            第一个指定元素的所有元素
                p:first-child i{} 第一个p中所有的i
            css-：last-child 最后一个元素
            css-：lang伪类 允许为不同的语言定义特殊的规则。

                

    4. 伪元素选择器 元素一部分 设计样式 伪元素用于设置元素指定部分的样
    式。   
        ::first-line 伪元素只能应用于块级元素。
        设置元素的首字母、首行的样式
        在元素的内容之前或之后插入内容

    5. 属性选择器 属性或属性值
        [attribute] 选择器 指定属性的元素
        [attribute="value"] 选择器 带有指定属性和值
        [attribute|="value"] 选择器 指定属性以指定值开头
        [attribute^="value"] 选择器 指定属性以指定值开头
        [attribute$="value"] 选择器 指定属性以指定值结尾
        [attribute*="value"] 选择器 属性值包含指定词