<template>
  <div class="userList">
    <el-row :gutter="20"
      ><el-col :span="18"> <Search /></el-col
      ><el-col :span="6"> <ButtonGroup :buttonRroup="buttonRroup"/></el-col>
    </el-row>
    <Table :tableHeader="tableHeader" :tableData="tableData.data" />
    <Pagination :Pagination="pagination" />
  </div>
</template>
<script lang="ts">
import { reactive } from "vue"
import Search from "../../components/Search/index.vue"
import ButtonGroup from "../../components/ButtonGroup/index.vue"
import Table from "../../components/Table/index.vue"
import Pagination from "../../components/Pagination/index.vue"
import { tableHeader, buttonRroup, pagination } from "./dataValidators"
import UserApi from "../../api/userApi"
export default {
  name: "",
  components: { Search, ButtonGroup, Table, Pagination },
  setup() {
    const storage: any = localStorage.getItem("userInfo")
      ? localStorage.getItem("userInfo")
      : ""
    const params = {
      userId: storage !== "" ? JSON.parse(storage).user_id : "",
      key: ""
    }
    const tableData = reactive({ data: [] })
    async function getUserList() {
      await UserApi.getUserList(params).then((res: any) => {
        for (const item of res.data) {
          if (item.user_isActive * 1 === 1) item.user_isActive = "已激活"
          else item.user_isActive = "未激活"
        }
        tableData.data = res.data
      })
    }
    getUserList()
    // pagination.total = tableData.data.length
    return { tableHeader, buttonRroup, pagination, tableData }
  }
}
</script>
<style scoped>
.userList {
  text-align: center;
}
</style>
