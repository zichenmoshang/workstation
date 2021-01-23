import { Module } from "vuex"
import { getters } from "./getters"
import { actions } from "./actions"
import { mutations } from "./mutations"
import { state } from "./state"
import { UserStateTypes, IRootState } from "./types"

const user: Module<UserStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
}

export default user
