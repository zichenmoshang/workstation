import baseService from "@/utils/baseService"

export interface UserProps {
  username: string
  password: string
  captchaId: string
  verifyCode: string
}

class User extends baseService {
  /**
   * 获取用户信息
   */
  getUserInfo(data: any) {
    return this.postReq({
      url: "/user/getuserinfo",
      data
    })
  }
  /**
   * 获取用户列表
   */
  getUserList(params: any) {
    return this.getReq({
      url: "/user/getuserlist",
      params: params
    })
  }
}

let instance
export default (() => {
  // if (instance) return instance
  // instance = new User()
  // return instance
  return instance || new User()
})()
