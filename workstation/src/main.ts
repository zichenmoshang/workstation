import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
/**
 * element-plus全局导入
 */
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
/**
 * ant-design-vue全局导入
 */
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import axios from "./http";

const app = createApp(App);

// 全局挂载axios
app.config.globalProperties.$axios = axios;

app.use(Antd);
// app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
