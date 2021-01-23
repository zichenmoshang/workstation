<template>
  <el-container class="layout">
    <Aside />
    <el-container>
      <Header />
      <el-main><Main /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "@/components/Layout/aside.vue"
import Header from "@/components/Layout/header.vue"
import Main from "@/components/Layout/main.vue"
import { reactive, toRefs } from "vue"
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
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style>
.layout {
  height: 100vh;
}
</style>
