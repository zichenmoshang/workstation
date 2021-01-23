<template>
  <el-header>
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ realname }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button"
            >退出平台</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>
<script>
import { ElMessage } from "element-plus"
export default {
  name: "Header",
  setup() {
    const realname = JSON.parse(localStorage.getItem("userInfo")).user_realname
    const handleSelect = key => {
      // console.log(`Click on item ${key}, ${keyPath}`)
      switch (key) {
        case "1": {
          ElMessage.warning("我还没有做个人信息！")
          break
        }
        case "2": {
          ElMessage.warning("我还没有做退出！")
        }
      }
    }
    return { realname, handleSelect }
  }
}
</script>
<style scoped>
.el-header {
  background-color: #d3dce6;
  color: #333;
  line-height: 60px;
  width: 100%;
  text-align: right;
  font-size: 15px;
  padding-left: 0;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: large;
  /* color: #409eff; */
}
</style>
