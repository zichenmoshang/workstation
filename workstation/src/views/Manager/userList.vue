<template>
  <div class="userList">
    <Search />
    <Table :tableHeader="tableHeader" :tableData="tableData.data" />
  </div>
</template>
<script lang="ts">
import { reactive } from "vue"
import Search from "../../components/Search/index.vue"
import Table from "../../components/Table/index.vue"
import { tableHeader } from "./dataValidators"
import UserApi from "../../api/userApi"
export default {
  name: "",
  components: { Search, Table },
  setup() {
    const params = {
      userId: localStorage.getItem("userId"),
      key: ""
    }
    const tableData = reactive({ data: [] })
    function getUserList() {
      UserApi.getUserList(params).then((res: any) => {
        tableData.data = res.data
      })
    }
    getUserList()
    return { tableHeader, tableData }
  }
}
</script>
<style scoped></style>
