# workstation
> 前端目录："./workstation/";<br>
> 后端目录："./workstation_station/";<br>
---
## 1. 前端
| 序号 | 功能 | 路径 | 类型 | 传递参数 | 完成情况 |
|:----:|:----:|:----:|:----:|:----:|:----:|
| 01 | 注册 | "@/views/Login&Register/index.vue" | post | {<br>user_username: string;<br>user_password: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>user_permission;<br>} | √ |
| 02 | 登陆 | "@/views/Login&Register/index.vue" |  post | {<br>user_username: string;<br>user_password: string;<br>} | √ |
| 03 | 获取用户信息 |  | get | {<br>userId: string;<br>} | √ |
| 04 | 获取用户列表 | "@/views/Manager/userList.vue" | get | {<br>userId: string;<br>} | √ |
---
## 2. 后端
| 序号 | 功能 | 接口 | 类型 | 返回数据 | 完成情况 |
|:----:|:----:|:----:|:----:|:----:|:----:|
| 01 | 注册 | "/user/register" | post | {<br>token: string;<br>user_id: string;<br>} | √ |
| 02 | 登陆 | "/user/login" | post | {<br>token: string;<br>user_id: string;<br>} | √ |
| 03 | 获取用户信息 | "/user/getuserinfo" | get | {<br>user_id: number;<br>user_username: string;<br>user_realname: string;<br>user_isActive: number;<br>user_unit: string;<br>user_department: string;<br>} | √ |
| 04 | 获取用户列表 | "/user/getuserlist" | get | [{<br>user_id: number;<br>user_username: string;<br>user_realname: string;<br>user_isActive: number;<br>user_unit: string;<br>user_department: string;<br>}] | √ |