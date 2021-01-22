# workstation
> 前端目录："./workstation/";<br>
> 后端目录："./workstation_station/";<br>
---
## 1. 前端
| 序号 | 功能 | 路径 | 类型 | 参数 | 完成 |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 01 | 注册 | "@/views/Login&Register/index.vue" | post | {<br>user_username: string;<br>user_password: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>user_permission;<br>} | {<br>token: string;<br>user_id: string;<br>} | √ |
| 02 | 登陆 | "@/views/Login&Register/index.vue" |  post | {<br>user_username: string;<br>user_password: string;<br>} | {<br>token: string;<br>user_id: string;<br>} | √ |
| 03 | 获取用户信息 |  | post | {<br>user_id: string;<br>} | {<br>user_username: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>} | {<br>token: string;<br>user_id: string;<br>} | √ |
---
## 2. 后端
| 序号 | 功能 | 接口 | 类型 | 返回 | 完成 |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 01 | 注册 | "/user/register" | post | {<br>token: string;<br>user_id: string;<br>} | √ |
| 02 | 登陆 | "/user/login" | post | {<br>token: string;<br>user_id: string;<br>} | √ |
| 03 | 获取用户信息 |  | "/user/getinfo" | post | {<br>user_username: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>} | {<br>token: string;<br>user_id: string;<br>} | √ |