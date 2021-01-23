import { GetterTree } from "vuex"
import { UserGettersTypes, IRootState, UserStateTypes } from "./types"

export const getters: GetterTree<UserStateTypes, IRootState> &
  UserGettersTypes = {
  token: state => state.token,
  userInfo: state => state.userInfo
}
