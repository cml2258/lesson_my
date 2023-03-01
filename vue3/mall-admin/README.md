# vue3 商城管理后台 Admin

- mall 移动商城
    用户用的 移动端
    vant + asiox + 全家桶 
    PDD pv 10亿+ uv(用户数)

- mall admin 
    同事用（小编，运营）
    上架活动
    swiper 幻灯片的内容
    权限
    同事

- 全家桶开发理解

- vite 是如何启动项目的 npm run dev 运行的流程
    1. package.json script 脚本
        dev development 开发阶段 src/
        build 开发完了，打包上线准备 dist/
    2. vite 最快的工程化
        index.html 首页 3000  http-server启动起来
    3. src/main.js 作为单点入口文件
        实例化 vue app 
        并把App 组件挂载到#app节点上
    4. 基于模块依赖 代码组织起来

- redirect 细节
    1. localhost:3000/
        HTTP 请求响应式的
        -index.html 已发送到浏览器并显示
        - App.vue 已挂载
    2. router
        / redirect（配置跳转）
        302  /introduce（向浏览器发送302，跳转下一个路由）

        header + main.content
        导航 nav App.vue  + router-view 页面级别组件
