import { MutationTree } from 'vuex'
import { UserStateTypes, UserMutationsTypes } from './types'

export const mutations: MutationTree<UserStateTypes> & UserMutationsTypes = {
    ["SET_TOKEN"](state: UserStateTypes, token: any) {
        state.token = token
        console.log(token)
        localStorage.setItem("token", token);
        sessionStorage.setItem("token", token);
    },
    ["SET_USERINFO"](state: UserStateTypes, payload: any) {
        state.userInfo = payload;
        localStorage.setItem("userInfo", payload);
        sessionStorage.setItem("userInfo", payload);
    },
    ["CLEAR_TOKEN"](state: UserStateTypes) {
        state.token = null;
        state.userInfo.username = null;
        state.userInfo.userId = null;
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userId");
    },
    ["CLEAR_USER"](state: UserStateTypes) {
        state.userInfo = {
            userId: null,
            username: null,
        };
        localStorage.removeItem("userInfo");
        sessionStorage.removeItem("userInfo");
    }
}