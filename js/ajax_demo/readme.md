# 同学列表
    - 前后端分离
        前端：table
        后端 ？

        GET HTTP Method
        /student
        返回json 数据

- npm init -y 项目变成一个后端项目
    npm i json-server
    package.json   项目描述文件  dev:"json-server --watch student.json"
    npm run dev
- fetch 发送http协议 http请求分为  GET POST   FORM 动作
    GET 获取列表 可以省略method
    POST 添加新数据
    fetch(url,{//url资源在哪里
        method:'POST',  //请求的方式
        body:JSON.stringify(student), //请求体（传过去的数据）
        headers: {
                'Content-Type': 'application/json'
            } //声明一下请求头部，请求的是json
    })