import { ActionTree } from "vuex"
import { ElMessage } from "element-plus"
import { UserStateTypes, IRootState } from "./types"
import UserApi from "@/api/userApi"
import IgnoreApi from "@/api/ignoreApi"

export const actions: ActionTree<UserStateTypes, IRootState> = {
  ["LOGIN"]({ commit }, userInfo: any) {
    return new Promise<void>((resolve, reject) => {
      IgnoreApi.userLogin(userInfo)
        .then((res: any) => {
          commit("SET_TOKEN", res.data.token)
          commit("SET_USERINFO", JSON.stringify(res.data.userinfo))
          ElMessage.success("登陆成功")
          resolve()
        })
        .catch(e => {
          ElMessage.error("登陆失败")
          reject(e)
        })
    })
  },
  ["USERINFO"]({ commit }, userId: any) {
    return new Promise<void>((resolve, reject) => {
      UserApi.getUserInfo(userId)
        .then((res: any) => {
          commit("SET_USERINFO", JSON.stringify(res.data.userinfo))
          resolve()
        })
        .catch(e => reject(e))
    })
  },
  ["REGISTER"]({ commit }, userInfo: any) {
    return new Promise<void>((resolve, reject) => {
      IgnoreApi.register(userInfo)
        .then((res: any) => {
          commit("SET_TOKEN", res.token)
          commit("SET_USERID", res.user_id)
          ElMessage.success("注册成功")
          resolve()
        })
        .catch(e => {
          ElMessage.error("注册失败")
          reject(e)
        })
    })
  },
  ["LOGOUT"]({ dispatch }) {
    return new Promise<void>(resolve => {
      // IgnoreApi.userLogout().then(() => {
      dispatch("USER_REMOVE")
      resolve()
      // })
    })
  },
  ["USER_REMOVE"]({ commit }) {
    commit("CLEAR_USER")
    commit("CLEAR_TOKEN")
  }
}
