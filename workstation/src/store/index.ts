import { createStore } from "vuex"

import userModel from "@/store/user"

export const store = createStore({
  plugins: [],
  modules: {
    user: userModel
  }
})
