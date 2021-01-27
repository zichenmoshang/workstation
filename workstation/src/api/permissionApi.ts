import baseService from "@/utils/baseService"

// export interface PermissionProps {
//   username: string
//   password: string
//   captchaId: string
//   verifyCode: string
// }

class Permission extends baseService {
  /**
   * 根据权限id获取权限信息
   */
  getPermissionFromId(params: any) {
    return this.getReq({
      url: "/permission/getpermissionfromid",
      params: params
    })
  }
  /**
   * 根据用户id获取权限信息
   */
  getPermissionFromUser(params: any) {
    return this.getReq({
      url: "/permission/permissionInfo",
      params: params
    })
  }
}

let instance
export default (() => {
  return instance || new Permission()
})()
