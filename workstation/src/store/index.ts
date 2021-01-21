import {createStore, createLogger} from "vuex";

import userModel from "@/store/user";

export const store = createStore({
    plugins:
        process.env.NODE_ENV === 'production'
            ? []
            : [createLogger()],
    modules: {
        user: userModel,
    },
});