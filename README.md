# workstation
> 前端目录："./workstation/";<br>
> 后端目录："./workstation_station/";<br>
---
## 1. 前端&后端交互端口
| 序号 | 分类 | 功能 | 路径 | 类型 | 传递参数 | 完成情况 |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 01.1 | 前端 | 注册 | "@/views/Login&Register/index.vue" | post | {<br>user_username: string;<br>user_password: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>user_permission;<br>} | √ |
| 01.2 | 后端 | 注册 | "/user/register" | post | {<br>token: string;<br>user_id: string;<br>} | √ |
| 02.1 | 前端 | 登陆 | "@/views/Login&Register/index.vue" |  post | {<br>user_username: string;<br>user_password: string;<br>} | √ |
| 02.2 | 后端 | 登陆 | "/user/login" | post | {<br>token: string;<br>user_id: string;<br>} | √ |
| 03.1 | 前端 | 获取用户信息 |  | get | {<br>userId: string;<br>} | √ |
| 03.2 | 后端 | 获取用户信息 | "/user/getuserinfo" | get | {<br>user_id: number;<br>user_username: string;<br>user_realname: string;<br>user_isActive: number;<br>user_unit: string;<br>user_department: string;<br>} | √ |
| 04.1 | 前端 | 获取用户列表 | "@/views/Manager/userList.vue" | get | {<br>userId: string;<br>} | √ |
| 04.2 | 后端 | 获取用户列表 | "/user/getuserlist" | get | [{<br>user_id: number;<br>user_username: string;<br>user_realname: string;<br>user_isActive: number;<br>user_unit: string;<br>user_department: string;<br>}] | √ |
---
## 2. 前端模块
| 序号 | 功能 | 路径 | 类型 | 完成情况 |
|:----:|:----:|:----:|:----:|:----:|
| 01 | 登录模块 | "@/components/Login/index.vue" | "@/components/Login/type.ts" | √ |
