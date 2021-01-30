<template>
  <el-container class="layout">
    <Aside />
    <el-container class="layoutRight">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>
<script>
import Aside from "@/components/Layout/aside.vue"
import Header from "@/components/Layout/header.vue"
import Main from "@/components/Layout/main.vue"
import { reactive, toRefs } from "vue"
import { useRouter } from "vue-router"
export default {
  name: "Layout",
  components: {
    Aside,
    Header,
    Main
  },
  setup() {
    const data = reactive({
      selectedKeys: ["1"],
      collapsed: false
    })
    const isLogin = () => {
      if (!localStorage.getItem("token") && !sessionStorage.getItem("token")) {
        return useRouter().push("login")
      }
    }
    isLogin()
    return {
      isLogin,
      ...toRefs(data)
    }
  }
}
</script>

<style>
.layout {
  height: 100%;
  width: 100%;
}
.layoutRight {
  display: flex;
  flex-direction: column;
}
</style>
