<template>
  <Table :tableHeader="tableHeader" :tableData="tableData" />
</template>
<script lang="ts">
import Table from "../../components/Table/index.vue"
import { TableHeader } from "../../components/Table/validators"
import PermissionApi from "../../api/permissionApi"
export default {
  name: "",
  components: { Table },
  setup() {
    const tableHeader: TableHeader = [
      {
        type: "index",
        label: "序号",
        prop: null,
        width: "50",
        fixed: "left",
        sortable: false,
        align: "center"
      },
      {
        type: null,
        label: "日期",
        prop: "date",
        width: null,
        fixed: "left",
        sortable: false,
        align: "center"
      },
      {
        type: null,
        label: "姓名",
        prop: "name",
        width: null,
        fixed: "left",
        sortable: false,
        align: "center"
      },
      {
        type: null,
        label: "地址",
        prop: "address",
        width: null,
        fixed: "left",
        sortable: false,
        align: "center"
      }
    ]
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
    console.log("params", params)
    PermissionApi.getUserList(params).then((res: any) => {
      // ElMessage.success("登陆成功")
      console.log("res")
      console.log(res)
      return res
    })
    return { tableHeader, tableData }
  }
}
</script>
<style scoped></style>
