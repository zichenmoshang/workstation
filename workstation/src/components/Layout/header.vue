<template>
  <el-header>
    <el-dropdown @command="headerCommand">
      <span class="el-dropdown-link">
        {{ realname }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user" command="1"
            >个人中心</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-switch-button" command="2"
            >退出平台</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>
<script>
import { ElMessage } from "element-plus"
import { store } from "../../store/index"
export default {
  name: "Header",
  setup() {
    const realname = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo")).user_realname
      : ""
    const headerCommand = key => {
      switch (key) {
        case "1": {
          ElMessage.warning("我还没有做个人信息！")
          break
        }
        case "2": {
          if (store.dispatch("LOGOUT")) {
            location.reload()
          }
        }
      }
    }
    return { realname, headerCommand }
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
}
</style>
