# 前端工程化

- webpack 5
- vue3
-npm init -y 
    初始化项目 ，项目为node后端项目（前后端分离）
    npm i -g yarn 安装到全局 (faceBook npm包)
    npm i webpack 安装到当前项目
- yarn 
    npm的代替品， 来自facebook
    npm i 
    yarn add
- 工程化在代码的开发阶段
    development 代码开发 vite webpack babel 搭建开发阶段的脚手架
        npm i webpack -D

    test        测试阶段
    production  上线阶段  vue

- 工程化的套件  devDependiences
    - webpack webpack-cli 5.0
    - src 代码开发目录
        main.js 入口文件
        index.html 首页  root 挂载点
    - 如何web-server 在 :8888 index.html 显示
    - main.js
        createApp   App.vue 根组件
    - webpack --mode=development
        启动webpack 工程化，为代码开发做准备
        webpack-cli --mode-development 命令行参数
        npm run dev
        webpack webpack.config.js