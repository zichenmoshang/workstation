<template>
  <Table :tableHeader="tableHeader" :tableData="tableData" />
</template>
<script lang="ts">
import Table from "../../components/Table/index.vue"
import { tableHeader } from "./dataValidators"
import UserApi from "../../api/userApi"
export default {
  name: "",
  components: { Table },
  setup() {
    const tableData = [
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-08",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-06",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-07",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      }
    ]
    const params = {
      userId: localStorage.getItem("userId"),
      key: ""
    }
    const dat = UserApi.getUserList(params)
    console.log(dat)
    return { tableHeader, tableData, dat }
  }
}
</script>
<style scoped></style>
