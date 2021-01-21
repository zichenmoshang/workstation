import { MutationTree } from 'vuex'
import { UserStateTypes, UserMutationsTypes } from './types'
import store from '@/utils/store'

export const mutations: MutationTree<UserStateTypes> & UserMutationsTypes = {
    ["SET_TOKEN"](state: UserStateTypes, { token }: any) {
        state.token = token
        store.set("token", token);
    },
    ["SET_USERINFO"](state: UserStateTypes, payload: any) {
        state.userInfo = payload;
        store.set("userInfo", payload);
    },
    ["CLEAR_TOKEN"](state: UserStateTypes) {
        state.token = null;
        state.userInfo.username = null;
        state.userInfo.userId = null;
        store.remove("token");
        store.remove("username");
        store.remove("userId");
    },
    ["CLEAR_USER"](state: UserStateTypes) {
        state.userInfo = {
            userId: null,
            username: null,
        };
        store.remove("userInfo");
    }
}