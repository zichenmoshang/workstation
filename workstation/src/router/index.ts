import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login&Register/index.vue")
  },
  {
    path: "/",
    name: "Layout",
    meat: {
      title: "首页",
      icon: "el-icon-apple"
    },
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/manager",
    name: "Manager",
    meat: {
      title: "管理中心",
      icon: "el-icon-setting"
    },
    component: () => import("@/views/Layout/index.vue"),
    children: [
      {
        path: "userlist",
        name: "UserList",
        meat: {
          title: "用户列表",
          icon: "el-icon-user"
        },
        component: () => import("@/views/Manager/userList.vue")
      }
    ]
  },
  {
    path: "/onlinetest",
    name: "OnlineTest",
    meat: {
      title: "在线答题"
    },
    component: () => import("@/views/OnlineTest/index.vue"),
    children: [
      {
        path: "/testpapermanager",
        name: "TestpaperManager",
        meat: {
          title: "试卷管理"
        },
        component: () => import("@/views/OnlineTest/testpaperManager.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    component: () => import("@/views/Error404/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
