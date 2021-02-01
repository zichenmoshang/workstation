<template>
  <div class="userList">
    <el-row :gutter="20"
      ><el-col :span="18"> <Search /></el-col
      ><el-col :span="6"> <ButtonGroup :buttonRroup="buttonRroup"/></el-col>
    </el-row>
    <Table :tableHeader="tableHeader" :tableData="tableData.data" />
    <Pagination :pagination="pagination" />
  </div>
</template>
<script lang="ts">
import { provide, reactive } from "vue"
import Search from "../../components/Search/index.vue"
import ButtonGroup from "../../components/Button/ButtonGroup.vue"
import Table from "../../components/Table/index.vue"
import Pagination from "../../components/Pagination/index.vue"
import { tableHeader, buttonRroup, pagination } from "./data"
import UserApi from "../../api/userApi"
export default {
  name: "",
  components: { Search, ButtonGroup, Table, Pagination },
  setup() {
    const storage: any = sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo")
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
        // pagination.total = tableData.data.length
        // pagination.pageCount = tableData.data.length
      })
    }
    getUserList()
    console.log(">>>", pagination)
    const paginationData = reactive({
      pagination
    })
    paginationData.pagination.total = tableData.data.length
    paginationData.pagination.pageCount = tableData.data.length
    console.log("<<<", paginationData.pagination)
    provide("paginationData", paginationData.pagination)
    return { tableHeader, buttonRroup, pagination, tableData }
  }
}
</script>
<style scoped>
.userList {
  text-align: center;
}
</style>
