<template>
  <el-aside width="250px">
    <div class="logo">
      <span>Work-Station</span>
    </div>
    <el-menu background-color="#e9eef3">
      <el-submenu index="1">
        <template #title><i class="el-icon-message"></i>导航一</template>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
import { useRouter } from "vue-router"
export default {
  name: "Aside",
  setup() {
    const { options } = useRouter()
    console.log(options)
    return {
      options
    }
  }
}
</script>
<style scoped>
.el-aside {
  background-color: #e9eef3;
}
.logo {
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: #409eff;
}
</style>
