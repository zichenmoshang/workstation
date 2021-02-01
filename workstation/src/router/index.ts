import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Layout",
    meta: {
      title: "首页",
      icon: "el-icon-star-off"
    },
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/manager",
    name: "Manager",
    meta: {
      title: "管理中心",
      icon: "el-icon-setting"
    },
    component: () => import("@/views/Layout/index.vue"),
    children: [
      {
        path: "userlist",
        name: "UserList",
        meta: {
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
    meta: {
      title: "在线答题",
      icon: "el-icon-user"
    },
    component: () => import("@/views/OnlineTest/index.vue"),
    children: [
      {
        path: "/testpapermanager",
        name: "TestpaperManager",
        meta: {
          title: "试卷管理",
          icon: "el-icon-user"
        },
        component: () => import("@/views/OnlineTest/testpaperManager.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "登录",
      icon: "el-icon-key"
    },
    component: () => import("@/views/Login&Register/index.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    hidden: true,
    meta: {
      title: "错误",
      icon: "el-icon-warning-outline"
    },
    component: () => import("@/views/Error404/index.vue")
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token")
  if (!token && to.path != "/login") {
    next({ path: "/login" })
  } else {
    next()
  }
})
export default router
