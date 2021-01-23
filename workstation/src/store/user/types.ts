interface UserInfo {
  realname: string | null
  userId: string | null
}

export interface IRootState {
  user: UserStateTypes
}

export type UserStateTypes = {
  token?: string | null
  userInfo: UserInfo
}

export type UserMutationsTypes<S = UserStateTypes> = {
  ["SET_TOKEN"](state: S, payload: any): void
  ["SET_USERINFO"](state: S, payload: any): void
  ["CLEAR_TOKEN"](state: S): void
  ["CLEAR_USER"](state: S): void
}

export type UserGettersTypes = {
  token(state: UserStateTypes): any
  userInfo(state: UserStateTypes): any
}
