import baseService from "@/utils/baseService";


// export function register(ctx: any, registerUser: any) {
//   return ctx.$axios.post("/api/v1", registerUser)
// };
// export function login(ctx: any, loginUser: any) {
//   return ctx.$axios.post("http://localhost:2326/user/login", loginUser)
// }

export interface UserProps {
  username: string;
  password: string;
  captchaId: string;
  verifyCode: string;
}

class User extends baseService {
  // 登录
  userLogin(data: UserProps) {
    return this.postReq({
      url: "/user/login",
      data
    })
  }

  userLogout() {
    return this.postReq({
      url: "/user/logout",
    });
  }


  // 获取用户信息
  getInfo() {
    return this.getReq({
      url: "/user/getinfo"
    })
  }
}

let instance;
export default (() => {
  if (instance) return instance;
  instance = new User();
  return instance;
})();