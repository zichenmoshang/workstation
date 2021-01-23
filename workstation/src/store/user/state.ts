import { UserStateTypes } from "./types"

export const state: UserStateTypes = {
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  userInfo: {
    realname:
      localStorage.getItem("realname") || sessionStorage.getItem("realname"),
    userId: localStorage.getItem("userId") || sessionStorage.getItem("userId")
  }
}
