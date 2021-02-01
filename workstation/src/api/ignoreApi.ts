import baseService from "@/utils/baseService"
import axios from "@/utils/axios"

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
  userLogin(data: any) {
    // return this.postReq({
    //   url: "/ignore/login",
    //   data
    // })
    return axios("/ignore/login", {
      method: "POST",
      responseType: "json",
      data: data
    })
  }
  /**
   * 注册
   */
  register(data: any) {
    // return this.postReq({
    //   url: "/ignore/register",
    //   data
    // })
    return axios("/ignore/register", {
      method: "POST",
      responseType: "json",
      data: data
    })
  }

  // userLogout() {
  //   // return this.postReq({
  //   //   url: "/ignore/logout"
  //   // })
  //   return axios("/ignore/logout", {
  //     method: "POST",
  //     responseType: "json",
  //     data: data
  //   })
  // }
}

let instance
export default (() => {
  // if (instance) return instance
  // instance = new User()
  // return instance
  return instance || new Ignore()
})()
