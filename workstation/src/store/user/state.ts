import { UserStateTypes } from "./types"

export const state: UserStateTypes = {
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  userInfo:
    localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo")
}
