- sqlserver mysql 关系型数据库
- mongodb NOSQL 存储JSON文档 杂乱无章

- blog 论坛数据库
    - 用户表 （任何项目都有个user表）
        登录 鉴权 + role 分配
        id（自增 int11）   username（varchar 255 可变长度字符串)   password（varchar字符型 不能存明文，hash加盐）
        索引？Primary KEY（`id`）  查询更快
        UNIQUE KEY `name` (`name`)唯一索引
        ENGINE=InnoDB MySQL搜索引擎

    1. 密码不能存明文，java/node/ mvc 用户表单传过来的password 123456
    md5 单向加密的方式 先加密再存储到数据库。
        数据库被攻击，不能解密的。
        md5(123456) == password 
    2. CREATE TABLE `user`(
        （id name等字段俗名）filed int(11) AUTO-INCREMENT NOT NULL, //AUTO-INCREMENT 自增id
              varchar(255)
              longtext //不限长度的类型
        PRIMARY KEY(`id`), //主键
        UNIQUE KEY `name`(`name`) //除了主索引之外，其他索引 取索引名字
    )ENGINE=

    web http 默认服务 80

    select * from user where id = 1; O(1)

    - 内容表（post表）
        建立外键FOREIGN KEY 表关联起来 CONSTRAINT`关联名字`  REFERENCES`user`(`id`)
        INSERT INTO 插入数据

    

- create database blog； 新建blog项目对应的数据库
    * MySQL  3306端口（工作）  启动数据服务
    java/node/go/  3000端口  启动http服务  sql请求


- 文章列表？ select  索引？ index 查询更快 查询利用上索引
    primary key（`id`）
    文章表 主表
    用户表 附属于
    文章的列表 （包括用户信息）
    关联查询 自己有一个id 和别的表的id 关联起来
    
- select post.id, post.title, post.content, user.id as userId,user.name as userName  from post LEFT JOIN user ON user.id=post.userId;
    联合查询的一种  JOIN 
    LEFT JOIN   左边的是主表 
    ON  条件  user.id = post.id  
    post LEFT JOIN user ON (条件)user.id=post.userId
