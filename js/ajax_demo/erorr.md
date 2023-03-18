<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
    <table  class="table">
        <thead>
            <th>姓名</th>
            <th>年龄</th>
            <th>家乡</th>
        </thead>
        <tbody>

        </tbody>
    </table>
    <!-- required 必填的字段 -->
    <form name="studentForm">
        <div class="mb-3">
            <label for="nameInput" class="form-label">姓名</label>
            <input type="text" name="name" class="form-control" id="nameInput" 
            required
            placeholder="请输入名字">
        </div>
        <div class="mb-3">
            <label for="ageInput" class="form-label">年龄</label>
            <input type="number" name="age" class="form-control" id="ageInput"
            required 
            placeholder="请输入年龄 ">
        </div>
        <div class="mb-3">
            <label for="hometownInput" class="form-label">家乡</label>
            <input type="text" name="hometown" class="form-control" id="hometownInput" 
            required
            placeholder="请输入家乡">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">提交</button>
        </div>
    </form>
    </div>
    <script>
    // json   forEach  DOM 
    // json  分离在student.json中
    // 依赖http 服务 
    // student.JSON 提供http 服务 文件 ftp
    // fetch 发送一个ajax http请求
    const oTBody = document.querySelector('table tbody');
    fetch('http://localhost:3000/students')
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            data.forEach(item => {
                oTBody.innerHTML +=`
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.hometown}</td>
                </tr>
                `
            });

        })
    const oForm = document.forms["studentForm"];
    oForm.addEventListener("submit",function(event){
        // 阻止默认行为
        event.preventDefault();
        // console.log(this)
        const students = {
            // 箭头函数没有this，外界的this，指向window
            // 箭头函数只返回值可以去掉花括号，没有返回值，要花括号
            name:this["name"].value,
            age:this["age"].value,
            hometown:this["hometown"].value
        }
        console.log(students)
        // 前后端分离，通信利用http服务，写进数据。
        // JSON.stringify 数据json化
        fetch('http://localhost:3000/students', {
            method: 'POST',
            body: JSON.stringify(students),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(data => {
            console.log(data);
        })
    })
    </script>
</body>
</html>