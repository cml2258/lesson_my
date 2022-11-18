# 大厂HTML5 作品赏析

- html5 标签
    audio 网易云音乐
    video 爱奇艺 B站
- background-size
    1. 移动端rem，w h是多变的 而pc端没有这个问题
    2. 移动端 retina 3倍retina
    40*40 80*80 120*120
    200*200
    3. background-size：cover 剪裁 背景图片大小
        等比例缩放背景图片 填满容器
        超出则剪裁
        contain 完整展示图片 有空隙

- 库文件引入的位置
    1. css 放到head里面
        css应该尽早地参与网页的渲染 样式设计

    2. js放在body最下面，会阻塞页面渲染    

- swiper 滑动组件库的使用
    1. 引入swiper 组件库   
        js放在底部 css放在头部
    2. 固定的html结构
        .swiper-container(滑动的区域大小)>.swiper-wrapper>.swiper-slide
    3. new Swiper(selector,{
        direction:""
    })

- translated3d(-50%,0,0) 3d 启动3D加速器 GPU渲染（更快）
    translate(-50%,0) 2d
    效果一样

- 使用linear-gradient 生成背景图片
    1. 颜色渐变的图片，60deg,#f8ddd1,#faece5 73%,#fad2c0
        60deg线性渐变侵袭角度，默认上到下
        colorStop
    2. 性能优化，图片下载比较大
        css写的，不需要额外的下载
        img src 下载 + 显示
    3. 下载越多，http并发数越多，卡
        马路