import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login&Register/index.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    component: () => import("@/views/Error404/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
