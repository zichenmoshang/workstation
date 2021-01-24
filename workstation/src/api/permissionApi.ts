import baseService from "@/utils/baseService"

// export interface PermissionProps {
//   username: string
//   password: string
//   captchaId: string
//   verifyCode: string
// }

class Permission extends baseService {
  /**
   * 获取某个用户的权限
   */
  getPermission(params: any) {
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
