import { createRouter, createWebHistory } from "vue-router";
import {store} from "@/store";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    component: () => import("@/views/Error404/index.vue")
  }
];

const ignore = {
  token: ["/login", "/403", "/404", "/500", "/503"]
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
      store.commit("ADD_PROCESS", {
          label: to.path === "/" ? "首页" : (to.name as string),
          value: to.path
      })
  } else {
      if (!ignore.token.some((e) => to.path.includes(e))) {
          return next("/login");
      }
  }
  next()
})

export default router;
