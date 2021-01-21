
import { ActionTree } from 'vuex'
import { UserStateTypes, IRootState } from './types'
import UserApi from "@/api/userApi"



export const actions: ActionTree<UserStateTypes, IRootState> = {
    ["LOGIN"]({ commit }, userInfo: any) {
        return new Promise<void>((resolve, reject) => {
            UserApi.userLogin(userInfo).then(res => {
                console.log("store", res);
                commit("SET_TOKEN", res.token)
                resolve()
            }).catch(e => {
                reject(e)
            })
        })
    },
    ["USERINFO"]({ commit }) {
        return new Promise<void>((resolve, reject) => {
            UserApi.getInfo().then(res => {
                commit("SET_USERINFO", res.data)
                resolve()
            }).catch(e => reject(e))
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