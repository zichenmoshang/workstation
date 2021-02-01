import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { store } from "./store"
/**
 * ElementPlus全局导入
 */
import ElementPlus from "element-plus"
import local from "element-plus/lib/locale/lang/zh-cn"
import "element-plus/lib/theme-chalk/index.css"

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus, { local })
  .mount("#app")
