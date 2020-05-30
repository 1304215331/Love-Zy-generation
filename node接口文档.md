## `my-app`接口文档 

### 基地址`http://localhost:8008`

### `/login`登录接口

| `username` | 用户账号 |
| :--------- | -------- |
| `password` | 用户密码 |

```javascript
{
    "request": "200",
    "msg": "登录成功",
    "data": [
        {
            "Id": 11,
            "name": "张三",
            "username": "444444",
            "password": "666666",
            "cok": "2020-05-30 11:37:18.490"
        }
    ]
}
```

### `/register`注册接口

| name       | 用户昵称 |
| :--------- | :------- |
| `username` | 用户账号 |
| `password` | 用户密码 |

```javascript
{
    "request": "200",
    "msg": "注册成功"
}
```

