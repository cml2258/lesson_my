# 网站的核心？
    1. 内容
        a标签 

- 传统的网站开发
    - 使用MVVM 代替DOM 编程
        数据驱动开发
    - 多个页面+a  Multiple Page Application
        1. 每个页面都是重复的完整的html结构
        2. 用户体验不太好， 需要优化
            每个页面的请求过程都是一次http的请求响应过程
            完整的html 没有必要
            请求响应需要一个时间  页面会白一下， 页面加载慢
            有什么技术方案 去优化
            SPA  Single Page Application
            单页应用开发思维
            ajax 不跳转页面 vue  data
            - SPA 
            - ajax js动态的更新内容，后台去向服务器端通信，获取新的内容，多个页面共享新的头部和尾部
                不用单纯的借助url的切换，http向服务器重新请求整个页面
                1. 先把a标签的默认功能干掉
                2. 利用ajax请求
                3. 利用正则表达式（ \s\S 匹配空格和换行   *? 匹配任何字符 ？是匹配一次，我们拿到的内容会有script的东西，会导致重复匹配荐升 ），拿到页面内容（match匹配的东西是数组形式）



- 遇到的问题：
    for(let link of links){
            link.addEventLister('click',function(event){
                event.preventDefault();
                const href = event.target.href;//事件，也可以通过this找到a标签，拿到href属性
                console.log(href);
                //ajax
                
            })
        }
    中26行，link.addEventLister写成link.addEventListener就会去了标签默认跳转功能，但是前面一个可以直接实现a标签直接使得多个页面内容在同一个页面显示？为什么？
    问题原因：我在观察的时候没有注意到写的页面都是一样的导航栏，内容变了是因为网页的链接名字已经切换了。如果实现了效果应该是页面不会切换。