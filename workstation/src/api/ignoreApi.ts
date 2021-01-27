import baseService from "@/utils/baseService"

export interface UserProps {
  username: string
  password: string
  captchaId: string
  verifyCode: string
}

class Ignore extends baseService {
  /**
   * 登录
   */
  userLogin(data: UserProps) {
    return this.postReq({
      url: "/ignore/login",
      data
    })
  }
  /**
   * 注册
   */
  register(data: any) {
    return this.postReq({
      url: "/ignore/register",
      data
    })
  }

  userLogout() {
    return this.postReq({
      url: "/ignore/logout"
    })
  }
}

let instance
export default (() => {
  // if (instance) return instance
  // instance = new User()
  // return instance
  return instance || new Ignore()
})()
