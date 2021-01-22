import baseService from "@/utils/baseService";

export interface UserProps {
  username: string;
  password: string;
  captchaId: string;
  verifyCode: string;
}

class User extends baseService {
  /**
   * 登录
   */
  userLogin(data: UserProps) {
    return this.postReq({
      url: "/user/login",
      data
    })
  }
  /**
   * 获取用户信息
   */
  getInfo(data: any) {
    return this.postReq({
      url: "/user/getinfo",
      data
    })
  }
  /**
   * 注册
   */
  register(data: any) {
    return this.postReq({
      url: "/user/register",
      data
    })
  }

  userLogout() {
    return this.postReq({
      url: "/user/logout",
    });
  }
}

let instance;
export default (() => {
  if (instance) return instance;
  instance = new User();
  return instance;
})();