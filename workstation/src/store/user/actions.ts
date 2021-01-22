
import { ActionTree } from 'vuex'
import { message } from 'ant-design-vue';
import { UserStateTypes, IRootState } from './types'
import UserApi from "@/api/userApi"

export const actions: ActionTree<UserStateTypes, IRootState> = {
    ["LOGIN"]({ commit }, userInfo: any) {
        return new Promise<void>((resolve, reject) => {
            UserApi.userLogin(userInfo).then(res => {
                commit("SET_TOKEN", res.token)
                commit("SET_USERID", res.user_id)
                message.success("登陆成功");
                resolve()
            }).catch(e => {
                message.error("登陆失败");
                reject(e)
            })
        })
    },
    ["USERINFO"]({ commit }, user_id: string) {
        return new Promise<void>((resolve, reject) => {
            UserApi.getInfo(user_id).then(res => {
                commit("SET_USERINFO", JSON.stringify(res))
                resolve()
            }).catch(e => reject(e))
        })
    },
    ["REGISTER"]({ commit }, userInfo: any) {
        return new Promise<void>((resolve, reject) => {
            UserApi.register(userInfo).then(res => {
                commit("SET_TOKEN", res.token)
                commit("SET_USERID", res.user_id)
                message.success("注册成功");
                resolve()
            }).catch(e => {
                message.error("注册失败");
                reject(e)
            })
        })
    },
    ["LOGOUT"]({ dispatch }) {
        return new Promise<void>((resolve) => {
            UserApi.userLogout().then(() => {
                dispatch("USER_REMOVE")
                resolve();
            })
        })
    },
    ["USER_REMOVE"]({ commit }) {
        commit("CLEAR_USER");
        commit("CLEAR_TOKEN");
    }
}