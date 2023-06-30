# SPA 优质的现代用户体验
1. 不要通过a标签跳转页面白一下
    click event.preventDefault() 默认行为
    index.html#page1  index.html#page2  index.html#page3
    加# url hash部分 不会刷新页面
    不同的url来匹配不同的页面
    url会变,
    
2. url的hash部分改变 请求新的内容
    并且页面不会重新刷新

3. url 分成以下几个部分
    window是顶级对象：一派是管理DOM是body部分，一派是管理BOM对象是浏览器部分
    js  url 属于 BOM    location对象
    http://127.0.0.1:5501/lesson_my/js/router/hash/index.html#/page3
    location.protocol https： => "http"
    location.host => 域名+端口  domain port
            location.hostname =》127.0.0.1
            location.port
    location.pathname
    location.search
    location.hash  改变时  不会刷新页面
            页面查询部分 search: ""