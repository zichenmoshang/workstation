# workstation
> 前端目录："./workstation/";<br>
> 后端目录："./workstation_station/";<br>
---
## 1. 功能
| 序号 | 功能 | 路径 | 接口 | 类型 | 参数 | 返回 | 完成 |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 01 | 注册 | "@/views/Login&Register/index.vue" | "/user/register" | post | {<br>user_username: string;<br>user_password: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>user_permission;<br>} | {<br>token: string;<br>user_id: string;<br>} | 前端√<br>后端√ |
| 02 | 登陆 | "@/views/Login&Register/index.vue" | "/user/login" | post | {<br>user_username: string;<br>user_password: string;<br>} | {<br>token: string;<br>user_id: string;<br>} | 前端√<br>后端√ |
| 03 | 获取用户信息 |  | "/user/getinfo" | post | {<br>user_id: string;<br>} | {<br>user_username: string;<br>user_realname: string;<br>user_avatar: string;<br>user_unit: string;<br>user_department: string;<br>} | {<br>token: string;<br>user_id: string;<br>} | 前端√<br>后端√ |